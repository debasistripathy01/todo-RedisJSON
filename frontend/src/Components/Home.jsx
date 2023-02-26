import React, { useEffect, useState } from 'react'

const Home = () => {

    const [name, setName] = useState("");
    const [task, setTask] = useState([]);
    
    useEffect(()=>{
        
        const getData = async()=>{
            try{
                const res = await fetch("");
            const data = await res.json();
                setTask(data)
            }catch(err){
                console.log(err)
            }
    
        }

    }, [])
  return (
    <>
        <input type='text' className='todoInput' />
        <button >ADD</button>
    </>
  )
}

export default Home