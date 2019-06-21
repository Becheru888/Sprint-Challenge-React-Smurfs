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

  handleInput = e => {
    e.persist();
    this.setState(prevState => {
      return {
        newSmurf: {
          ...prevState.newSmurf,
          [e.target.name]: e.target.value
        }
      };
    });
  };


  render() {
    return (
      <StyledDiv>
        <StyledNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/add">Add Smurf</NavLink>
        </StyledNav>

        <Route
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />

        <Route
          exact
          path="/add"
          render={props => (
            <SmurfForm
              {...props}
              smurf={this.state.smurf}
              handleInput={this.handleInput}
              addData={this.addData}
            />
          )}
        />
      </StyledDiv>
    );
  }
}

export default App;




const StyledDiv = styled.div`
 
`;

const StyledNav = styled.div`
 
`;