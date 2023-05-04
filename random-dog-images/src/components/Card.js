import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

const Card = () => {
    const [dogs, setDogs] = useState([]);
}

useEffect(() => {
    fetch('http://localhost:3000/dogs')
    .then((r) => r.json)
    .then(data => setDogs(data))
    .catch(error => console.error(error));
}, []);

return (
    <>
    {dogs.map((dog) => (
        <div className='card' key={dog.id} ></div>
    ))}
    
    
    
    
    
    </>
)