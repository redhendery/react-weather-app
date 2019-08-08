import React from 'react';

class Titles extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title-container__title" class="display-4 text-center">It's Weather!</h1>
        <p className="title-container__subtitle" class="lead text-center">I hope it is whatever your definition of 'nice out' is.</p>
      </div>
    )
  }
}

export default Titles;
