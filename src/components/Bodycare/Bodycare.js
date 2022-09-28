import React, { useEffect, useState } from 'react';
import'./Bodycare.css';

const Bodycare = () => {
  const [programs, setPrograms] = useState([]);

  useEffect( () =>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setPrograms(data))
  } ,[])

  return (
    <div className="main-container container">
        <div className="programs-container pt-5">
             <h1 className='text-warning'>Women Body Care</h1>
             <h5>Our Programs </h5>
        </div>
        <div className="activities-container mt-3">
           <div id='owner-detail'>
              <img src="https://images.pexels.com/photos/7500712/pexels-photo-7500712.jpeg?auto=compress&cs=tinysrgb&w=600" height={60} width={50} alt="" />
          
           <div className='pt-3'>
               <h5> Elisa Sole</h5>
               <p><small>Palermo, Italy</small></p>
           </div>
           </div>
        </div>
    </div>
  );
};

export default Bodycare;