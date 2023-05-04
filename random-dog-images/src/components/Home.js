import React,{useState,useEffect} from 'react'
import {Link}from 'react-router-dom'
import axios from 'axios'

function Home (){
    const[breeds,setBreeds]=useState([])
    useEffect(()=>{
        axios.get('https://dog.ceo/api/breeds/list/all')
        .then(res=>{
            const breeds=Object.keys(res.data.message)
            setBreeds(breeds)
        })
        .catch(error=>{console.log(error)})
    },[])
    const adoptRescueDog=()=>{
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(res=>{
    
    
            const imageUrl=res.data.message
            const img=document.createElement('img')
            img.src=imageUrl
            img.alt='rescue-dog'
            document.body.appendChild(img)
        
        }
            
        )
        .catch(error=>{console.log(error)
        })}
    return(
        <div className='home'>
            <h2>
                Select a breed from our store or adopt our rescued pets:
            </h2>
            <div className='breeds'>
                {breeds.map(breed=>(
                    <Link key={breed} to={`/breed/${breed}`}>{breed}</Link>
                ))}
            </div>
            <button onClick={adoptRescueDog}>WANT TO ADOPT ONE OF OUR RESCUE DOGS ?CLICK HERE</button>
        </div>
    )
}

export default Home