import React, { Component } from 'react';
import axios from 'axios';

class CitySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      data: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://ctp-zip-api.herokuapp.com/city/${this.state.city.toUpperCase()}`)
      .then(response => {
        const newData = response.data;
        this.setState({ data: newData });
      })
      .catch(err => {
        console.log(err);
        this.setState({ data: [] });
      });
  }

  handleChange = (event) => {
    this.setState({ city: event.target.value });
  }

  render() {
    return (
      <div className="centered">
        <form onSubmit={this.handleSubmit}>
          Enter a City name
          <br />
          <input
            type="text" name="city"
            onChange={this.handleChange} />
          <input type="submit" value="Submit" />

        </form>
        <div className="container">
          {this.state.data.length == 0
            ? "No Results"
            : this.state.data.map(zip => <div className="card">{zip}</div>)
          }
        </div>
      </div>
    );
  }
};

export default CitySearch;
