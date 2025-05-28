import React, { useState } from 'react'
import "./index.css";

 const App = () => {
   
   const [username, setusername] = useState("sunal")
   const [newname, setnewname] = useState(" ")
   
   const handelchanging=(e)=>{ 
    setnewname(e.target.value);
   }
  const handlesubmit=(e)=>{
    e.preventDefault();
      if(newname.trim()!==" "){
        setusername(newname)
        setnewname("")
      }
  }
  return ( 

<> <h3 className='text-center'>Name Changing using React Hooks </h3>
    <div className=' flex items-center justify-center min-h-screen w-full bg-zinc-700 m-3 rounded'>
      <div className='text-white text-center'>
    <h1 className='text-8xl'>{username}</h1>
    

    <form >
      <input className='border-1 rounded p-2 mt-4'  onChange={handelchanging}  value={newname}     type="text" placeholder='Enter your name' />
    </form>
   <button className='mt-8 border-3 rounded p-2' onClick={handlesubmit}>Change name </button>
    </div>
    </div>
 </>
  )
}


export default App;