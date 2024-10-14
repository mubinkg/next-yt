import React from 'react'

const User = async () => {
    const user:any = await (()=>new Promise((resolve,reject)=>{
        setTimeout(async ()=>{
            try{
                const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1')
                const user = await userResponse.json()
                return resolve(user)
            }catch(err){
                return reject(err)
            }
        }, 4000)
    }))()
    console.log(user)
  return (
    <div>
        <h1>User name : {user.name}</h1>
        <p>User email : {user.email}</p>
    </div>
  )
}

export default User