import React from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const GitInstall = () => {
  const go = useNavigate();

  const goto = () => {
    go(-1);
  };
  const { id } = useParams();

  return (
    <Contain style={{ lineHeight: "70px" }}>
      <h1>Students details page </h1>

      <h1>Students Name {id}</h1>

      <button onClick={goto}>Go Back</button>
    </Contain>
  );
};

export default GitInstall;

const Contain = styled.div`
  background-color: #91ecec;
  width: 1150px;
  margin-left: 300px;
  height: 450px;
  button {
    width: 150px;
    height: 30px;
    background-color: greenyellow;
    border-radius: 20px;
    margin-top: 20px;
  }
`;
