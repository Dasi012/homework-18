import React from "react";
import { Route, Routes } from "react-router-dom";
import { Courses } from "../conponents/Courses";
import { Materials } from "./../conponents/material/Materials";
import { MaterialDetail } from "../conponents/material/MaterialDetail";
import { Students } from "../conponents/Coursers/Students";
import { Retting } from "../conponents/Coursers/Retting";
import { Submited } from "../conponents/material/Submited";
import { Waiting } from "../conponents/material/Waiting";
import { Late } from "../conponents/material/Late";
import Anouncement from "../conponents/Coursers/Anouncement";
import Notification from "../conponents/Coursers/Notification";
import Schedure from "../conponents/Coursers/Schedure";
import GitInstall from "../conponents/Coursers/GitInstall";

export const Rout = () => {
  return (
    <>
      <Routes>
        <Route path="/courses" element={<Courses />}>
          <Route path="/courses/material" element={<Materials />} />

          <Route path="/courses/material/:id" element={<MaterialDetail />}>
            <Route path="submited" element={<Submited />} />
            <Route path="waiting" element={<Waiting />} />
            <Route path="late" element={<Late />} />
          </Route>
          <Route path="/courses/student" element={<Students />} />
          <Route path="/courses/student/:id/detail" element={<GitInstall />} />

          <Route path="/courses/rating" element={<Retting />} />
        </Route>
        <Route path="/anouncements" element={<Anouncement />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/schedule" element={<Schedure />} />
      </Routes>
    </>
  );
};
