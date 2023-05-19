import React from "react";
import { material } from "./Materials";
import { Link, Outlet, useParams } from "react-router-dom";
import { styled } from "styled-components";

export const MaterialDetail = () => {
  const params = useParams();
  const materialss = material.find((el) => el.id === params.id);

  return (
    <>
      {<h1>{materialss.title}</h1>}
      <Contain>
        <Links to="submited">Submited </Links>
        <Links to="waiting">Waiting</Links>
        <Links to="late">Late </Links>

      </Contain>
        <Outlet />
    </>
  );
};

const Links = styled(Link)`
  line-height: 30px;
  text-decoration: none;
  font-weight: 700;



`;

const Contain = styled.div`
  background-color: aquamarine;
  width: 1150px;
  height: 50px;
  margin-left: 320px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
