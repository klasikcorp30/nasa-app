import React, { Component } from 'react';
import Axios from 'axios';

Axios.get()

class Picture extends Component {
    render() {
        return (
            <div className="text-center">
                <img className='rounded h-50 w-50' src={this.props.url} alt='APOD'/>   
            </div>
        );
    }
}

export default Picture;