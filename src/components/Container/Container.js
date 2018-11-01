import React, { Component } from 'react';
import Title from '../Title/Title';
import Picture from '../Picture/Picture';
import Information from '../Information/Information';
import Explaination from '../Explaination/Explaination';
import './Container.css';
import axios from 'axios';


class Container extends Component {
    state = {
        apod: []
    }
    componentDidMount() {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=fMKezsKcYSXXNhLSBime1tUmKA0za6PRCw1l2eTq')
        .then(res => {
            const apod = res.data;
            this.setState({
                apod
            })
            console.log();
        });
    };

    render() {
        return (
            <div className="container shadow p-3 mb-5 bg-white rounded mt-4" id="bg">
               <Title title={this.state.apod.title}  /> 
               <Picture url={this.state.apod.url} />
               <Information copyright={this.state.apod.copyright} date={this.state.apod.date} />
               <Explaination explaination={this.state.apod.explanation} />
               <div className="row text-center">
                <div className="col-md-6">
                    <img className="rounded-circle h-100 w-50" alt="NASA Logo" src="https://icarus.upc.edu/en/figs/logos/logo-nasa.jpg/@@images/image.jpeg" />
                </div>
                <div className="col-md-6">
                <img className="rounded-circle h-100 w-50" alt="React Logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19mnk_0xgAW6pJhXIL4UwQnIif5AsgVGLOWOjSiXtDbKv3P-w" />
                </div>
               </div>
               <p className="m-5 text-center"><b>Powered by NASA & React 2018&copy; Copyright</b></p>
            </div>
        );
    }
}

export default Container;