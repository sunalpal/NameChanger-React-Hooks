import React, { useState } from 'react'
import "./index.css";

 const App = () => {
   
   const [username, setusername] = useState("sunal")

  const chainging=(e)=>{
    e.preventDefault();
      setusername("kunal")
  }
 const  UserRealname =(e)=>{
    console.log(e);
    
 }
  return ( 

<> <h3 className='text-center'>Name Changing using React Hooks </h3>
    <div className=' flex items-center justify-center min-h-screen w-full bg-zinc-700 m-3 rounded'>
      <div className='text-white text-center'>
    <h1 className='text-8xl'>{username}</h1>
    
   <button className='mt-8 border-3 rounded p-2' onClick={chainging}>Change name </button>
    </div>
    </div>
 </>
  )
}


export default App;