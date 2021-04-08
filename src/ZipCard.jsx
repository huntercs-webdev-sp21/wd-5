import React, {Component} from 'react';
import axios from 'axios';
class ZipCard extends Component {

    render() {
        return(
            <div className="zip-card">
                <ul>
                    <h3> {this.props.city}, {this.props.state}</h3>
                    <li> State: {this.props.state} </li>
                    <li> Location: ({this.props.latitude}, {this.props.longitude}) </li>
                    <li> Population (estimated): {this.props.population} </li>
                    <li> Total Wages: {this.props.wages} </li>
                </ul>
            </div>
        );
    }
};

export default ZipCard;
