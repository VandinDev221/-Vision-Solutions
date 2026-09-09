"use client";

import dynamic from "next/dynamic";
import React from "react";

const GlobalScene = dynamic(
  () => import("./GlobalScene").then((mod) => mod.GlobalScene),
  { ssr: false }
);

export const SceneWrapper: React.FC = () => {
  return <GlobalScene />;
};
