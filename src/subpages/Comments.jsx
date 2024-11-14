import React, { useEffect, useState } from 'react'
import RGScreenHeader from '../components/RGScreenHeader'
import RGButton from '../components/RGButton'
import { useNavigate } from 'react-router-dom'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import app from '../config/firebase/firebaseconfig'
import RGTable from '../components/RGTable'

let db = getFirestore(app)

const Comments = () => {
  const [usersData, setUsersData] = useState([])
  const navigate = useNavigate()

  const getUser = async () => {
    let docRef = collection(db, 'Comments')
    const querySnapshot = await getDocs(docRef)
    const users = []

    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() })
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
                  navigate('comments/Comment')
                }}
                label="Add Comment"
              />
            ),
          },
        ]}
      />
       <RGTable
      data={usersData}
      columns={[
        {
          key: "Comment",
          label: "Comment",
        },
      ]}
       />

    </div>
  )
}

export default Comments
