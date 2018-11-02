import React, { Component } from 'react';


class Picture extends Component {
    render() {
        let url = String(this.props.url);
        return (
        <div className="text-center embed-responsive embed-responsive-16by9">
            {url.includes('.jpg') ?
            <img className='rounded h-50 w-50' src={this.props.url} alt='APOD'/>
            :
            <iframe title='nasa' className='rounded mt-5' width="600px" height="500px"  src={this.props.url} frameborder="0" allowfullscreen="true"></iframe>
            }
        </div>
        );
    }
}

export default Picture;