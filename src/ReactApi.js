import React from "react"
import { useEffect, useState } from 'react';
function ReactApi() {
    const [posts,setpost]=useState([]);
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
        response.json().then((result)=>{
            setpost(result);
            
         
    
        })
      });
    })
    return (
        <>
       <div>
        <ul>
            {
                posts.map((psts,key)=>{
                    return (
                        <>
                        <li>{psts.id}</li>
                        <li>{psts.title}</li>
                        </>

                    )
                })
            }
        </ul>
       </div>
        </>
    );
  }
  
  export default ReactApi;