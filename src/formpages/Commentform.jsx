import React, { useState } from 'react'
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import app from '../config/firebase/firebaseconfig';
// import { useNavigate } from 'react-router-dom';
import RGButton from '../components/RGButton';
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
const { TextArea } = Input;
const db = getFirestore(app);

const Commentform = () => {
  const [comments, setcomment] = useState({Comment:""})
  const navigate = useNavigate()
    
    let addComment = async ()=>{
        let Ref = collection(db,'Comments')
        await addDoc(Ref,comments).then((res)=>{
            console.log(res); 
            navigate('home/comments')
        }).catch((err)=>{
            console.log(err.message);
        })
    }
    
    return (
        <>
            <div className='bg-white w-[100%] h-[50%] rounded-lg flex justify-center items-center flex-col'>
                <div className='bg-white w-[50% rounded-lg m-2'>
                    <h1 className='text-center font-bold text-2xl p-2'>Comment Form</h1>
                </div>
                <div className='bg-white w-[70%] rounded-lg m-2 p-2' >
                    <TextArea
                        className='placeholder:text-black'
                        onChange={e => setcomment({ ...comments, Comment: e.target.value })}
                        label="UserName"
                        placeholder='Comments'
                        // autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                    <br />
                    <RGButton className='m-2' type='primary' onClick={addComment} label='Add' />
                    {/* <RGButton className='m-2' type='primary' onClick={navigat} label='Sign Up' /> */}
                </div>
            </div>

        </>
    )
}

export default Commentform
