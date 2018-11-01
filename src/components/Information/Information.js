import React, { Component } from 'react';

class Information extends Component {
    render() {
        return (
            <div>
                <div className="row mt-4 text-center">
                    <div className="col-md-6">
                        <p><b>Author:</b> {this.props.copyright}</p>
                    </div>
                    <div className="col-md-6">
                        <p><b>Date:</b> {this.props.date}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Information;