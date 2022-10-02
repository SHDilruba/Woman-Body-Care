import React, { useState } from 'react';
import'./Activities.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

const Activities = (props) => {
  const {activities} = props;

  const [breakTimes, setBreakTimes] = useState([]);

  const addToCart = (breakTimes) =>{
   const time = breakTimes.target.innerText;
   setBreakTimes(time)
   localStorage.setItem('breakTimes', JSON.stringify(time))
  }

  return (
    <div className="activities-container bg-warning">      
       <div id='profile-detail'>                   
          <img src="https://images.pexels.com/photos/7500712/pexels-photo-7500712.jpeg?auto=compress&cs=tinysrgb&w=600" height={60} width={50} alt="" />                    
          <div className='pt-3'>
              <h5>Sayeda Yasmin</h5>
                <p> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon><small className='ms-2 '>Palermo, Italy</small>
                </p>
          </div>  
     </div>      
        <div id='profile-quality' className='px-3  py-1 bg-light '>
          <div className='years ps-3'>
             <p>Age:</p>
             <p> 28 yrs</p>
         </div>
            <div className='pe-3'>
               <p>Experience</p>
               <p> 5 yrs</p>
           </div>
        </div>     
          <div>
            <h5 className='mt-5 mb-3'>Add a Break</h5>
              <div className='break-time px-1'>
                 <button onClick={addToCart}>3m</button>
                 <button onClick={addToCart}>4m</button>
                 <button onClick={addToCart}>3m</button>
                 <button onClick={addToCart}>4m</button>
                 <button onClick={addToCart}>2m</button>
              </div>
          </div>
            <div>
              <h5 className='mt-5 mb-3'>Experience Details</h5>
                <div className='exercise-time bg-light py-2 ps-3'>Exercise time <span className='ms-5 ps-4'></span>
                </div>
                  <div className='br-time bg-light mt-3 py-2 ps-3'>Break time <span className='ms-5 ps-5'>{breakTimes}</span> 
                 </div>
             </div>
          </div> 
       );
  };

export default Activities;
