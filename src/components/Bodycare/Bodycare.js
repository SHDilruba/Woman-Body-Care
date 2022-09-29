import React, { useEffect, useState } from 'react';
import Programs from '../Programs/Programs';
import'./Bodycare.css';

const Bodycare = () => {
  const [programs, setPrograms] = useState([]);

  useEffect( () =>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setPrograms(data))
  } ,[])

  return (
    <div className="main-container  container mb-5">
      <div className=" programs-container pt-5 pe-5">
         <h1 className='text-warning'>Women Body Care</h1>
           <h4 className='pb-4'>Our Programs </h4>
             <div class="row row-cols-1 row-cols-md-3 g-4">         
              {
               programs.map(program => <Programs program={program} key={program.id} ></Programs>)
              }
            </div>
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