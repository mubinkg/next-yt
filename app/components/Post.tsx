import React from 'react'

const Post = async () => {
    const post:any = await (()=>new Promise((resolve,reject)=>{
        setTimeout(async ()=>{
            try{
                const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1')
                const post = await postResponse.json()
                return resolve(post)
            }catch(err){
                return reject(err)
            }
        }, 2000)
    }))()
    console.log(post)
  return (
    <div>
        <h1>Post title: {post.title}</h1>
        <p>Post body: {post.body}</p>
    </div>
  )
}

export default Post