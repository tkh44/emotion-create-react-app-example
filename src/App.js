import React, { Component } from 'react';
import logo from './logo.svg';
import styled, { keyframes } from 'react-emotion'

const spinFrames = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Wrapper = styled.div`
  text-align: center;

  & .App-logo {
    animation: ${spinFrames} infinite 20s linear;
    height: 80px;
  }

  & .App-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }

  & .App-intro {
    font-size: large;
  }
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Wrapper>
    );
  }
}

export default App;
