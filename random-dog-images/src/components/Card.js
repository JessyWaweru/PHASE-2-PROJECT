import React from 'react';

function Card(){

    fetch ('ttp://localhost:3000/dogs')
    .then(r => r.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))



    
}


export default Card;