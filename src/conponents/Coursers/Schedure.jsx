import React from "react";
import { styled } from "styled-components";

const Schedure = () => {
  return (
    <Contain>
      <h1> Schedure Page</h1>
      <button>Go To Student Page</button>
    </Contain>
  );
};

export default Schedure;

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -550px;
  margin-left: 350px;
  width: 400px;
  width: 1150px;
  height: 450px;
  background-color: aqua;

  button {
    width: 150px;
    height: 30px;
    background-color: greenyellow;
    border-radius: 20px;
    margin-left: 540px;
    margin-top: 20px;
  }
`;
