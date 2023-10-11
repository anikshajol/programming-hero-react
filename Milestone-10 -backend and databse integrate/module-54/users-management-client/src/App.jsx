import { useEffect, useState } from 'react'

import './App.css'

function App() {
 const [users,setUsers]= useState([])

 useEffect(()=>{
  
  const fetchData = async()=>{
    const res = await fetch(`http://localhost:5000/users`)
    const data = await res.json()
    
    setUsers(data)
  }

  fetchData()

 },[])

const handleSubmit= (e)=>{
  e.preventDefault()
  const form = e.target
  const email = form.email.value;
  const name = form.name.value

  const user ={name,email}

  // console.log(user);

  fetch(`http://localhost:5000/users`,{
    method: 'POST',
    headers: {
      'content-type':'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log('inside post response', data);
    const newUser = [...users,data]
    setUsers(newUser)

    form.reset()
  })

}


 console.log(users);

  return (
    <>
   
      <h1>{users.length}</h1>

      <form onSubmit={handleSubmit} >
        <input type="email" name="email" id="email" /> <br />
        <input type="text" name="name" id="name" /><br />
        <input type="submit" value="Submit" />
      </form>
       
        {
          users.map(user=><div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>)
        }
        
    
    </>
  )
}

export default App
