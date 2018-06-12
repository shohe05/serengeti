import React from 'react';
import {render} from 'react-dom';
import BookList from './components/BookList'

class App extends React.Component {
  render () {
    return (
      <BookList />
    )
  }
}

render(<App/>, document.getElementById('app'));
