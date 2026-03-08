import React from "react";
import Fish from "@site/src/components/fish";

export default function Root({ children }) {
  return (
    <>
      {children}
      <Fish />
    </>
  );
}
