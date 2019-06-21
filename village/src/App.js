import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';


const data = "http://localhost:3333/smurfs";


console.log(data)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      newSmurf: {
         name: "",
         age: "",
         height: ""
      },
      errMsg: null
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get(data)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => this.setState({ errMsg: err.message }))
      .finally(console.log(data));
  };

 addData = () => {
    axios
    .post(data, this.state.newSmurf)
    .then(() => this.fetchData());
  };



  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
