import React, { useState } from "react";
import "./App.css";
import { books } from "./components/data.js";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [displayMode, setDisplayMode] = useState("all"); 
  
  
  const bookdetSection = (displayMode === "all" || displayMode === "book") 
    ? <BookDetails books={books} /> 
    : null;
  
 
  const blogSection = (displayMode === "all" || displayMode === "blog") && 
    <BlogDetails />;
  
  
  const renderCourseSection = () => {
    if (displayMode === "all" || displayMode === "course") {
      return <CourseDetails />;
    }
    return null;
  };

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: "60px",
        flexWrap: 'wrap' 
      }}>
        <div className="mystyle1">
          <h1>Course Details</h1>
          {renderCourseSection()}
        </div>
        <div className="vl"></div>
        <div className="st2">
          <h1>Book Details</h1>
          {bookdetSection}
        </div>
        <div className="vl"></div>
        <div className="st2">
          <h1>Blog Details</h1>
          {blogSection}
        </div>
      </div>
      
      {/* <div style={{ textAlign: 'center', margin: '20px' }}>
        <h3>Display Options:</h3>
        <button onClick={() => setDisplayMode("all")}>Show All</button>
        <button onClick={() => setDisplayMode("book")}>Books Only</button>
        <button onClick={() => setDisplayMode("blog")}>Blogs Only</button>
        <button onClick={() => setDisplayMode("course")}>Courses Only</button>
      </div> */}
    </div>
  );
}

export default App;