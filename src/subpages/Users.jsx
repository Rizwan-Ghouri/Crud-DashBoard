import { getFirestore, collection, getDocs } from 'firebase/firestore'
import app from '../config/firebase/firebaseconfig'
import React, { useEffect, useState } from 'react'
import RGTable from '../components/RGTable';

let db = getFirestore(app);

const Users = () => {
    const [usersData, setUsersData] = useState([])

    const getUser = async () => {
        let docRef = collection(db, 'users')
        const querySnapshot = await getDocs(docRef);
        const users = []; // temporary array to hold user data

        querySnapshot.forEach((doc) => {
            users.push({ id: doc.id,...doc.data() }); // adding each user data to the array
        });
        console.log(users);
        
        setUsersData(users); // setting all users at once
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <div>
            <RGTable
                data={usersData}
                columns={[
                    {
                        key: "userName",
                        label: "User Name",
                    },
                    {
                        key: "email",
                        label: "Email",
                    },
                ]}
            />
        </div>
    )
}

export default Users
