import React from 'react';
import'./Blog.css';

const Blog = () => {
  return (
      <div className='container blog-container mt-5 pt-5'>
          <h2>Blog posts about React</h2>
            <div className='posts-container'>
               <div className='blog-post'>
                 <h4>How does React work?</h4>
                  <p> React creates user interfaces (UIs) in a predictable and efficient way using declarative code. It can be used to help build single page applications and mobile apps, or to build complex apps by utilising it with other libraries.                   
                </p>
            </div> 
               <div className='blog-post'>
               <h4> What are the differences between Props and State?</h4>
                  <p>State:
                     state is used for internal comunication inside a component.It can be modified using this.setState
                     State changes can be asyncronous
                     </p>
                     
                    <p> Props:
                     props is read only, can not be modified. It is come from external side. props is unidirectional.                    
                </p>
            </div> 
               <div className='blog-post'>
                 <h4>what can be done without loading data with useEffect?</h4>
                  <p>The useEffect allows to                      perform side effects in function components. 
                     Side effects directly can update the DOM, 
                     and timers also. useEffect accepts two arguments. The second argument is optional.                                    
                </p>
            </div> 
        </div>
    </div>
  );
};

export default Blog;