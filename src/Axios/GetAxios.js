import  Axios from 'axios';
import React, { useEffect, useState } from 'react'

const url="https://jsonplaceholder.typicode.com/posts";
export default function GetAxios() {
    const [posts,setposts]=useState([]);
    useEffect(()=>{
        Axios.get(url).then((response)=>{
                setposts(response.data);
        })
    },[])
  return (
    
    <>
{
                posts.map((psts)=>{
                        const {id,title,body}=psts;
                    return (
                        <>
                        <ul key={id}>
                            <li>{id}</li>
                            <li>{title}</li>
                            <li>{body}</li>

                        </ul>
                    
                        </>

                    )
                })
 }
    </>

  )
}
