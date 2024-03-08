import React from 'react'
import Card from './Card';
import { useState } from 'react';

function Cards (props) {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
   
    
  function getCourses() {
    
    if(category === "All"){
      //Here We first make an empty array and pass all value in it that are lies on different section 
      let allCourses = [];
      Object.values(courses).forEach(array => {
          //Now we use for Each to access those elements of that array and push in empty array of all courses 
          array.forEach(courseData => {
              allCourses.push(courseData);
            })
        })
      return allCourses;
    }
    else {
      //Only Pass Specific Category data array
      return courses[category]; 
    }

   
  }

    

  return (
    <div>
      {getCourses().length === 0 ? (
         <div className='text-center'>
          <h3 className='text-3xl mx-auto font-semibold'>No Data Found</h3>
         </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {getCourses().map((course) => (
              <Card key={course.id}
                course={course}
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}
                />
            ))}
          </div>
        )}
      </div>
    );
}

export default Cards