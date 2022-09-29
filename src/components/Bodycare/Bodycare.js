import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import Programs from '../Programs/Programs';
import'./Bodycare.css';

const Bodycare = () => {
  const [programs, setPrograms] = useState([]);
  // const [activities, setActivities] = useState([]);

  useEffect( () =>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setPrograms(data))
  } ,[])

  const handleAddToCart = (program) =>{
     console.log(program)
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
          <div className="activities-container mt-3">
              <div id='profile-detail'>
                 <img src="https://images.pexels.com/photos/7500712/pexels-photo-7500712.jpeg?auto=compress&cs=tinysrgb&w=600" height={60} width={50} alt="" />           
                   <div className='pt-3'>
                     <h5 className='text-warning'>Sayeda Yasmin</h5>
                    <p><small>Palermo, Italy</small></p>
                </div>  
            </div>
       <div id='profile-quality' className='px-3  py-1 bg-light '>
           <div className='years ps-3'>
             <p>Years:</p>
             <p> 28</p>
           </div>
              <div className='experience pe-3'>
                 <p>Experience:</p>
                 <p> 5 years</p>
              </div>
          </div>
        </div>
    </div>
     )
  }
 
  

export default Bodycare;