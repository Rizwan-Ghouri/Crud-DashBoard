import React, { useState } from 'react';
import RGButton from '../components/RGButton';
import RGInput from '../components/RGInput';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import app from '../config/firebase/firebaseconfig';
const db = getFirestore(app)


const Photoform = () => {
  const [modal, setModal] = useState({userName : "",Imageurl:""})
  let addPhoto = async ()=>{
    let Ref = collection(db,'Photos')
    await addDoc(Ref,modal).then((res)=>{
        console.log(res); 

    }).catch((err)=>{
        console.log(err.message);
    })
}


    return (
        <>
            <div className='bg-white w-[100%] h-[50%] rounded-lg flex justify-center items-center flex-col'>
                <div className='bg-white w-[50%] rounded-lg m-2'>
                    <h1 className='text-center font-bold text-2xl p-2'>Todos Form</h1>
                </div>
                <div className='bg-white w-[70%] rounded-lg m-2 p-2'>
                    <RGInput
                        onChange={e => setModal({ ...modal, Imageurl: e.target.value })}
                        type="text"
                        label="Image url"
                    />
                    <RGInput
                        onChange={e => setModal({ ...modal, userName: e.target.value })}
                        type="text"
                        label="User Name"
                    />
                    <br />
                    <RGButton className='m-2' type='primary' onClick={addPhoto} label='Add' />
                </div>
            </div>
        </>
    );
};

export default Photoform;
