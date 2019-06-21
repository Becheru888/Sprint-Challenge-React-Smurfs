import React, { Component } from 'react';
import styled from "styled-components";
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <StyledSmurfs>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                onclick={this.props.handle}
              />
            );
          })}
        </ul>
      </StyledSmurfs>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;


const StyledSmurfs = styled.div`
  display:flex !important;
  flex-flow:row;

`
