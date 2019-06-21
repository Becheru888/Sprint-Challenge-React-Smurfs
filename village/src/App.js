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

  deleteSmurf = (id) => {

    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(() => this.fetchData())
    .catch(err => console.log(err))
  }

  deleteSmurfel = () => {
    this.deleteSmurf(1)  
}

  render() {
    return (
      <StyledDiv>
        <StyledNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/add">Add Smurf</NavLink>
          <img src='https://i.postimg.cc/wxcBMHNS/smurf.png'></img>
          
        </StyledNav>

        <Route
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} handle={this.deleteSmurfel}/>}
        />

        <Route
          exact
          path="/add"
          render={props => (
            <SmurfForm
              {...props}
              newSmurf={this.state.newSmurf}
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
  background-color: #4267B2;
  color:white;
  padding: 0 0 40px 0;
  max-width: 800px;
  margin: 50px auto;
  border-radius: 2px;
  border: 1px solid #53354a;
 
  

`;

const StyledNav = styled.div`
  display:flex;
  position: relative;
  background-color: #4267B2;
  padding: 20px;
  a {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    text-decoration: none;
    color: white;
    padding: 21px;
    height:20px;
    
    &:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
  }

  img {
    width:300px;
    
  }
`;