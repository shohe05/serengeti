import React from 'react';

export default (props) => {
  return (
    <li key={props.book.id}>{props.book.title}</li>
  )
};