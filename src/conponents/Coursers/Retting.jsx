import React from "react";
import { styled } from "styled-components";
import { GoBackBtn } from "../../go-back/GoBack";

export const Retting = () => {
  return (
    <Contain>
      <h1>Retting page</h1>
      <GoBackBtn/>
    </Contain>
  );
};

const Contain = styled.div`
  background-color: #808080;
  width: 75%;
  height: 500px;
  margin-top: 50px;
  margin-left: 300px;
  padding-top: 50px;
`
