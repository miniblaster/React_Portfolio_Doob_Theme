import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "./Skill";
import { progressData } from "../../data/aboutsix.json";

const ProgressbarOne = () => {
  return (
    <>
      {progressData.map((progress) => (
        <TrackVisibility once key={progress.id} className="single-progress">
          <Skill progress={progress} />
        </TrackVisibility>
      ))}
    </>
  );
};

export default ProgressbarOne;
