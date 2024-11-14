import React, { useEffect, useState } from 'react'
import RGScreenHeader from '../components/RGScreenHeader'
import RGButton from '../components/RGButton'
import { Navigate, useNavigate } from 'react-router-dom'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import app from '../config/firebase/firebaseconfig'
import RGTable from '../components/RGTable'

let db = getFirestore(app)

const Photos = () => {
    const [usersData, setUsersData] = useState([])  
  const navigate = useNavigate()

  const getUser = async () => {
    let docRef = collection(db, 'Photos')
    const querySnapshot = await getDocs(docRef)
    const users = []

    querySnapshot.forEach((doc) => {
      users.push({ ...doc.data() })
    })
    console.log(users)
    setUsersData(users)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="p-4">
      <RGScreenHeader
        title="Users"
        actionButtons={[
          {

            display: () => (
              <RGButton
                type="primary"
                onClick={() => {
                    navigate('photos/photoform')
                }}
                label="Add Todos"
              />
            ),
          },
        ]}
      />
  <div div className = "mt-4 text-black" >
   {usersData.map((x,i)=>{
   })}
    <RGTable
      data={usersData}
      columns={[
        {
          key: "userName",
          label: "Titel",
        },
          {
            key: 'Imageurl',
            label: "todo",
          },
      ]}
    />
      </div >
    </div >
  )
}

export default Photos
