import React, { Component } from 'react';
import styled from "styled-components";

function SmurfForm(props) {
  return (
    <StyledDiv>
      <input 
      type="text" 
      placeholder="Name" 
      name="name" 
      onChange={props.handleInput} />
      <br />
      <input 
      type="text" 
      placeholder="Age" 
      name="age" 
      onChange={props.handleInput} />
      <br />
      <input t
      type="text" 
      placeholder="Height" 
      name="height" 
      onChange={props.handleInput} />
      <br />
      <button onClick={props.addData}>Add to the village</button>
    </StyledDiv>
  );
}
export default SmurfForm;


const StyledDiv = styled.div`
   margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-family: monospace;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    color: #2b2e4a;
    margin: 0 0 15px 0;
  }
  span {
    font-size: 10px;
  }
  input {
    width: 70%;
    padding: 15px 30px;
    border-radius: 4px;
    background-color: #fff;
    color: #4267B2;
    outline: 0;
    border-style: none;
    font-size: 16px;
    transition: all 0.3s;
    &:focus-within {
      color:white;
      background: #4267B2;

      &::placeholder {
      color: #fff;
      
    }
    }
    &::placeholder {
      color: #4267B2;
      
    }
  }
  button {
    font-size: 16px;
    background-color: #4267B2;
    padding: 15px 30px;
    border-radius: 4px;
    border: 1px solid #fff;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
  }
`;
