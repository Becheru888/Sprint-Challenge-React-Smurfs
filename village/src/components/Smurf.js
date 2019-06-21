import React from 'react';
import styled from "styled-components";

const Smurf = props => {


  return (
    <Styled className="Smurf" onClick={props.onclick}>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </Styled>
  );
};


Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;




const Styled = styled.div`
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  width:150px;
  height:150px;
  padding:50px;

`


