import React, { Component } from 'react';

class Explaination extends Component {
    render() {
        return (
            <div className="mt-5">
               <p> {this.props.explaination}</p> 
            </div>
        );
    }
}

export default Explaination;