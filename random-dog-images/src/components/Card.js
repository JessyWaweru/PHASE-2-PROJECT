import React from 'react';
import { Link } from 'react-router-dom';






function Card(){

    

    fetch ('http://localhost:3000/dogs')
    .then(r => r.json())
    .then(data => {

        return (
            <div class="card">
              <div class="card-border-top"></div>
              <div class="img"></div>
              <span>{data.map((data) => {
                data.image
              }) }</span>
              <p class="job">{data.breed}</p>
              <button >Click</button>
            </div>
          );
    })




    .catch(error => console.error(error))



    
}


export default Card;