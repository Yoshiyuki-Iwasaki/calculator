import React from "react";
import { ResultType } from "./type";
import { ResultLayout } from "./style";

const Result: React.FC<ResultType> = ({ result }) => {
  return <ResultLayout>{result}</ResultLayout>;
};

export default Result;
