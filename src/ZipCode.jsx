import React, {Component} from 'react';
import axios from 'axios';

import ZipCard from './ZipCard.jsx';

class ZipCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      data: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`http://ctp-zip-api.herokuapp.com/zip/${this.state.zip}`)
      .then(response => {
        const newData = response.data;
        this.setState({data: newData});
      })
      .catch(err => {
        console.log(err);
        this.setState({data:[]});
      });
  }

  handleChange = (event) => {
    this.setState({zip: event.target.value});
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Enter a Zip Code
          <br/>
          <input
            type="text" name="zip"
            onChange={this.handleChange} />
          <input type="submit" value="Submit"/>

        </form>
        <div>
          { this.state.data.length == 0
            ? "No Results"
            : this.state.data.map(data =>
                                  <div key={data.RecordNumber} className="zip">
                                    <ZipCard city={data.City} state={data.State}
                                             latitude={data.Lat} longitude={data.Long}
                                             population={data.EstimatedPopulation} wages={data.TotalWages}/>
                                  </div>)
          }
        </div>

      </div>
    );
  }
};


export default ZipCode;
