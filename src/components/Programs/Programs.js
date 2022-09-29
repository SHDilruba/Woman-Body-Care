import React from 'react';
import'./Programs.css';

const Programs = (props) => {
  const {name, picture, description, Age, time} = props.program;
  return (
          <div class="col">
            <div class="card h-100">
              <img src={picture} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                     <p  className='m-0'>For Age: {Age} - 40</p>
                       <p className='pb-5'>Time required:  {time}m</p>
                        <div class="add-btn d-grid col-11 mx-auto">
                           <button class="btn btn-warning p-2" type="button">Add to List</button>
                       </div>
                    </div>
                </div>
             </div>
    );
  };

export default Programs;