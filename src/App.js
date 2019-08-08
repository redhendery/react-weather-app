import React from 'react';
import Weather from './components/weather';
import Form from './components/form';
import Titles from './components/titles';

// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://weather-ydn-yql.media.yahoo.com/forecastrss?location=mountainview,ca&format=json&oauth_consumer_key=dj0yJmk9aDRQMEZvQmJhTDZUJmQ9WVdrOVprRTVZa2RZTkRnbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PThl&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1565223274&oauth_nonce=oR8pgAUomIS&oauth_version=1.0&oauth_signature=JehuYl2auNy3QpDLZbVJ4tVMq6U=",
//   "method": "GET",
//   "headers": {
//     "User-Agent": "PostmanRuntime/7.15.2",
//     "Accept": "*/*",
//     "Cache-Control": "no-cache",
//     "Postman-Token": "c55b6e4f-9fbe-4004-83de-9fc4483ee87b,42badb58-878e-4894-b7fb-adb0e4bf78ef",
//     "Host": "weather-ydn-yql.media.yahoo.com",
//     "Accept-Encoding": "gzip, deflate",
//     "Connection": "keep-alive",
//     "cache-control": "no-cache"
//   }
// }
//
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });

class App extends React.Component {
// Set initial state
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }

// Hit API to get weather information
  getWeather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`);
    const response = await api_call.json();
    console.log(response);
    if (city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        error: 'Please enter a City and Country :)'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div class="jumbotron">
          <div class="container">
            <Titles />
            <Form loadWeather={this.getWeather} />
            <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error} />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
