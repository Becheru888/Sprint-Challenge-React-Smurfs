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
 
`;
