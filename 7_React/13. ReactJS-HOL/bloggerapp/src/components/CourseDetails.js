import React, { useState } from "react";

export default function CourseDetails() {
  const [showCourses, setShowCourses] = useState(true);

  return (
    <div>
      {/* <button onClick={() => setShowCourses(!showCourses)}>
        {showCourses ? 'Hide Courses' : 'Show Courses'}
      </button> */}
      
      {showCourses ? (
        <div>
          <b style={{ fontSize: '1.5em' }}>Angular</b>
          <div>4/5/2021</div>
          <br/>
          <b style={{ fontSize: '1.5em' }}>React</b>
          <div>6/3/2021</div>
        </div>
      ) : (
        <div>Courses are hidden</div>
      )}
    </div>
  );
}