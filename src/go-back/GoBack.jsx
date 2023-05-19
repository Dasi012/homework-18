import React from "react";
import { useNavigate } from "react-router-dom";

export  function GoBackBtn() {
  const navigate = useNavigate();

  const GoBackBtn = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={GoBackBtn}>Go back</button>
    </div>
  );
}
