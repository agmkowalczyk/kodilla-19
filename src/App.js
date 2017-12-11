import React from 'react';
import './App.css';
import AddComment from './AddComment';
import CommentsListContainer from './CommentsListContainer';

const App = () => {
  return (
    <div className="App">
      <h2>Lista komentarzy</h2>
      <AddComment />
      <CommentsListContainer />
    </div>
  );
};

export default App;
