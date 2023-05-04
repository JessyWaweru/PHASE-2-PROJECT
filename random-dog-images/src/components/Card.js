import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/dogs')
      .then(response => response.json())
      .then(data => {
        setDogs(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {dogs.length > 0 ? (
        dogs.map(dog => (
          <div key={dog.id} className="card">
            
            <div className="img">
              <img src={dog.image} alt={dog.breed} />
            </div>
            <p className="job">{dog.breed}</p>
            <Link to={`/adopt/${dog.id}`} className="button">
              Adopt Dog
            </Link>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Card;
