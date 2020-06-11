import React from 'react';
import ReactDOM from 'react-dom';
import searchMovies from './searchMovies';

class Main extends React.Component {
  render() {
    return (
        <div className="container">
      <h1 className="title">React Movie Search</h1>
      <searchMovies/> 
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));