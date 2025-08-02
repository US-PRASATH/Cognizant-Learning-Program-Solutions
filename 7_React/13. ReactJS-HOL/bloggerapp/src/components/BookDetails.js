import React from "react";
import PropTypes from 'prop-types';

function BookDetails(props) {
  if (!props.books || props.books.length === 0) {
    return <div>No books available</div>; 
  }

  return (
    <ul>
      {props.books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );
}

BookDetails.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookDetails;