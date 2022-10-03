import React, { useState } from 'react';
import'./Activities.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot, faTowerBroadcast} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Activities = (props) => {
  const {activities} = props;

  let totalTime = 0;
  for(const exerciseTime of activities){
     totalTime = totalTime + exerciseTime.time;
  }
  const [breakTimes, setBreakTimes] = useState([]);

  const addToCart = (breakTimes) =>{
   const time = breakTimes.target.innerText;
   setBreakTimes(time)
   localStorage.setItem('breakTimes', JSON.stringify(time))
  }

  const MyToastCom = () => {
    toast.dark('Congratulations! activity completed');
  };

  return (
    <div className="activities-container bg-warning">      
       <div id='profile-detail'>                   
          <img src="https://images.pexels.com/photos/7500712/pexels-photo-7500712.jpeg?auto=compress&cs=tinysrgb&w=600" height={60} width={50} alt="" /> 
 {/*----------- about option started -------------*/}                   
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
               <p>Qualification:</p>
               <p> graduate</p>
           </div>
        </div>
    {/*----------- about option started -------------*/} 
   {/* -------------- Break times btn started---------- */}     
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
   {/* -------------- Break times btn ended---------- */}
            <div>
              <h5 className='mt-5 mb-3'>Experience Details</h5>
                <div className='exercise-time bg-light py-2 ps-3'>Exercise time <span className='ms-5 ps-4'>{totalTime}m</span>
                </div>
                  <div className='br-time bg-light mt-3 py-2 ps-3'>Break time <span className='ms-5 ps-5'>{breakTimes}</span> 
                 </div>
     {/* -------------- Toast option started---------- */}
             </div>
              <ToastContainer theme='theme' />
                <div className=" d-grid col-11 mx-auto pt-5">
                   <button onClick={MyToastCom} className="btn btn-dark" type="button">Activity Completed</button>
              </div>
          </div>               
       );
  };

export default Activities;

