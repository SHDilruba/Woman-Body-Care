import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import Programs from '../Programs/Programs';
import'./Bodycare.css';
import Activities from '../Activities/Activities';

const Bodycare = () => {
  const [programs, setPrograms] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect( () =>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setPrograms(data))
  } ,[])

  const handleAddToCart = (program) =>{
     const newActivities = [...activities, program];
     setActivities(newActivities);
  }

  return (
    <div className="main-container  container mb-5">
      <div className="programs-container pt-5 pe-lg-5">      
            <h1 className='text-warning'>  <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Women Body Care</h1>
             <h4 className='pb-4'>Our Programs </h4>
             <div className="row row-cols-1 row-cols-lg-3 g-4">         
              {
               programs.map(program => <Programs program={program} key={program.id} handleAddToCart={handleAddToCart} ></Programs>)
              }
           </div>
       </div>
          <div className="activities-container ">
          <Activities activities={activities}></Activities>
                               
          </div>
      </div>
     )
  }
 
  

export default Bodycare;