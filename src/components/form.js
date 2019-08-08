import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.loadWeather}>
        <div class="form-row">
          <div class="col">
            <input type="text" name="city" placeholder="City Name" class="form-control" />
          </div>
          <div class="col">
            <input type="text" name="country" placeholder="Country Name" class="form-control" />
          </div>
          <button class="btn btn-success">Get the Weather</button>
        </div>
      </form>
    )
  }
}

export default Form;
