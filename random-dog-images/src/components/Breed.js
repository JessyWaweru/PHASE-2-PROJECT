import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function Breed(){
    const{breed}=useParams()
    const[image,setImage]=useState('')

    useEffect(()=>{
        axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(res=>{
            const imageUrl=res.data.message
            setImage(imageUrl)
        })
        .catch(error=>{console.log(error)})
    },[breed])

    return (
        <div className='breed'>
            <h2>Adopt a {breed}</h2>
            <img src={image} alt={breed}/>

        </div>
    )

}

export default Breed