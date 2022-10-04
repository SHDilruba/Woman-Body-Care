import React from 'react';
import'./Programs.css';

const Programs = ({program, handleAddToList}) => {
  const {name, picture, description, Age, time} = program;
  return (
          <div className="col">
            <div className="card h-100">
              <img src={picture} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                     <p  className='m-0'> Age limit: {Age} - 40</p>
                       <p className='pb-5'>Time required: {time}m</p>
                        <div className="add-btn d-grid col-11 mx-auto">
                           <button onClick={() => handleAddToList(program)} className="btn btn-warning p-2" type="button">Add to List</button>
                       </div>
                    </div>
                </div>
             </div>
    );
  };

export default Programs;