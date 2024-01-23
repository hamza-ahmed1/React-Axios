import  Axios  from 'axios';
import React, { useState } from 'react'

export default function PostAxios() {
    const[my_title,settitle]=useState("");
    const[my_body,setbody]=useState("");
    const Handlesubmit=(event)=>{
        event.preventDefault();
        // console.log(my_title);
        // console.log(my_body);
        Axios.post("https://jsonplaceholder.typicode.com/post",{
            title:my_title,
            body:my_body
        }).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })

    }
  return (
    <>
    <div className='App'>PostAxios</div>
    <br/>

    <form className='App' onSubmit={Handlesubmit}>
        <label>Enter Title &nbsp;</label>
        <input type='text' value={my_title} onChange={(e)=>{settitle(e.target.value)}}/>
        <br/>
        <label>Enter Body &nbsp;</label>
        <input type='text' value={my_body} onChange={(e)=>{setbody(e.target.value)}}/>
        <br/>
        <br/>
        <input type='submit' value={'submit'}/>
    </form>

    </>
  )
}
