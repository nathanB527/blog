import React from "react";
import Fish from "@site/src/components/fish";
import Background from "@site/src/components/background";
import FishSchool from "@site/src/components/FishSchool";
import Jellyfish from "@site/src/components/jellyfish";

export default function Root({ children }) {
  return (
    <>
      {children}
      <Fish />
      <Background />
      <FishSchool />
      <Jellyfish />
    </>
  );
}
