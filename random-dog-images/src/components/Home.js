
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Home() {
  const [breeds, setBreeds] = useState([]);
  


  useEffect(() => {
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then((res) => {
        const breeds = Object.keys(res.data.message);
        setBreeds(breeds);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const AdoptRescueDog = () => {
    const [dogImageUrl, setDogImageUrl] = useState(null);

    useEffect(() => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((data) => {
          setDogImageUrl(data.message)
          
        })

        .catch((error) => console.error(error));
    }, []);

    return dogImageUrl && <img src={dogImageUrl} alt="rescued dog" />;
  };

  return (
    <div className="home">
      <h2>Select a breed from our store or adopt our rescued pets:</h2>
      <div className="breeds">
        {breeds.map((breed) => (
          <Link key={breed} to={`/breed/${breed}`}>
            {breed}
          </Link>
        ))}
      </div>

      <button onClick={AdoptRescueDog}>ADOPT A RESCUE DOG HERE!!! </button>
    </div>
  );

}

export default Home;

// added card

<div class="card">
  <div class="card-border-top">
  </div>
  <div class="img">
  </div>
  <span> Person</span>
  <p class="job"> Job Title</p>
  <button> Click
  </button>
</div>




