import React from "react";
import { styled } from "styled-components";
import { GoBackBtn } from "../../go-back/GoBack";

const Anouncement = () => {
  return (
    <Contain>
      <h1>Anouncement Page</h1>
 
 
      <GoBackBtn/>
 
     </Contain>
  );
};

export default Anouncement;

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -550px;
  margin-left: 350px;
  width: 1150px;
  height: 450px;
  background-color: aqua;

  button {
    width: 150px;
    height: 30px;
    background-color: greenyellow;
    border-radius: 20px;
    margin-left: 575px;
    margin-top: 20px;
  }
`;
