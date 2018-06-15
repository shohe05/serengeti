import React from 'react';
import BookItem from './BookItem';

export default class BookList extends React.Component {
  render() {
    const books = [
      {id: 1, title: '真実の10メートル手前'},
      {id: 2, title: '天使の家'}
    ];

    const bookItems = books.map(book => {
      return (
        <BookItem book={book} />
      )
    })

    return (
      <ul>
        {bookItems}
      </ul>
    ) 
  }
}