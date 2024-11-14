import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Users from '../subpages/Users'
import Comments from '../subpages/Comments'
import Commentform from '../formpages/Commentform'
import Photos from '../subpages/Photos'
import Photoform from '../formpages/Photoform'

const Home = () => {

  return (
    <>
      <h1 className="bg-black text-2xl p-2 text-white font-bold ">DashBoard</h1>
      <div className="grid grid-cols-12 h-screen">
        <div className="bg-black p-2 text-white text-center col-span-3">
          <nav className="flex flex-col">
            <Link className="w-5/5 p-2 m-1 border-2 text-xl" to={"home/users"}>Users</Link>
            <Link className="w-5/5 p-2 m-1 border-2 text-xl" to={"home/comments"}>Comments</Link>
            <Link className="w-5/5 p-2 m-1 border-2 text-xl" to={"home/photos"}>Todos</Link>
            {/* <Link className="w-5/5 p-2 m-1 border-2 text-xl" to={"/todos"}>todos</Link> */}
            {/* <Link className="w-5/5 p-2 m-1 border-2 text-xl" to={"/posts"}>Posts</Link> */}
          </nav>
        </div>
        <div className="col-span-9 p-3">
          <Routes>
            <Route path="home/users" element={<Users />} />
            <Route path='home/comments' element={<Comments />} />
            <Route path='home/photos' element={<Photos />} />
            <Route path='home/comments/*' element={<Commentform />} />
            <Route path='home/photos/*' element={<Photoform />} />
            {/* <Route path="/todos" element={<Todos />} /> */}
          </Routes>
        </div>
      </div>
    </>
  )
}

export default Home
