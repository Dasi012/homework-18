import React from "react";
import { Link, Outlet } from "react-router-dom";
import { styled } from "styled-components";

export const material = [
  {
    title: "Student Name 1",
    button: "Details",
    id: "1",
  },
  {
    title: "Student Name  2",
    button: "Details",
    id: "2",
  },
];

export const Students = () => {
  return (
    <div>
      <>
        {material.map((el) => {
          return (
            <Container>
              <MiniContainer>
                <h1>{el.title}</h1>
                <Link to={`${el.id}/detail`}>
                  <Button>{el.button}</Button>
                </Link>
              </MiniContainer>
            </Container>
          );
        })}
      </>
      <Outlet />
    </div>
  );
};

const Container = styled.div`
  margin-top: 20px;
`;
const MiniContainer = styled.div`
  width: 1190px;
  height: 80px;
  background-color: #fff;
  box-shadow: -8px 15px 21px 12px rgba(34, 60, 80, 0.2);
  margin: auto;
  margin-right: 60px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 12px;
  background-color: green;
  border: none;
  font-weight: 600;
`;
