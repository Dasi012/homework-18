import React from "react";
import { material } from "./Materials";
import { Link, Outlet, useParams } from "react-router-dom";

export const MaterialDetail = () => {
  const params = useParams();
  const materialss = material.find((el) => el.id === params.id);

  return (
    <div>
      {<h1>{materialss.title}</h1>}

      <Link to="submited">Submited page</Link>
      <Link to="waiting">Waiting page</Link>
      <Link to="late">Late page</Link>

      <Outlet />
    </div>
  );
};
