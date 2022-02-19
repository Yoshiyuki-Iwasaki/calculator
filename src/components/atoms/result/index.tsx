import React from "react";
import { ResultType } from "./type";

const Result: React.FC<ResultType> = ({ result }) => {
  return <div>{result}</div>;
};

export default Result;
