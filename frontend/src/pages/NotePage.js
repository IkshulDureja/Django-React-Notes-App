import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
// import { ReactComponent as ArrowLeft } from 'src/assets/arrow-left.svg'
import {GoArrowLeft as ArrowLeft} from "react-icons/go";
// 
const NotePage = () => {
    const {id}=useParams()

    const [data,setData] = useState(null);

    useEffect(()=>{
        getNote();
    },[`/api/notes/`+id])

    let getNote = async ()=>{

        if (id === 'new') return

        const res = await fetch(`/api/notes/`+id)
        const data = await res.json();
        setData(data)
    }

    
    let createNote = async ()=>{
        fetch(`/api/notes/create`,{
            method:"POST",
            headers:{
                'Content-Type':'application/JSON'
            },
            body: JSON.stringify(data)
        })
    }

    let updateNote = async ()=>{
        fetch(`/api/notes/${id}/update`,{
            method:"PUT",
            headers:{
                'Content-Type':'application/JSON'
            },
            body: JSON.stringify(data)
        })
    }


    let deleteNote = async ()=>{
        fetch(`/api/notes/${id}/delete`,{
            method:"DELETE",
            headers:{
                'Content-Type':'application/JSON'
            }
        })
        navigate("/")
    }

    let navigate= useNavigate();

    let handleSubmit = () => {
        if(id !== 'new' && data.body===''){
            deleteNote()
        }else if(id !== 'new'){
            updateNote()
        }else if(id === 'new' && data.body !== null){
            createNote()
        }
        navigate('/')
    }

    return (
    <div className='note'>
        <div className="note-header">
             <h3>
                <ArrowLeft onClick={handleSubmit}/>
            </h3>
            {id !== 'new'?(
                <button onClick={deleteNote}>Delete</button>
            ):(
                <button onClick={handleSubmit}>Done</button>
            )}
                        
        </div>
        <textarea onChange={(e)=>{setData({...data,'body':e.target.value})}} value={data?.body}></textarea>
    </div>
  )
}

export default NotePage
