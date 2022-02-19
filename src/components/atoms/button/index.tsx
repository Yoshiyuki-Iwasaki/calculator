import React from "react";
import { ButtonType } from "./type";

const Button: React.FC<ButtonType> = ({ text }) => {
  return <button>{text}</button>;
};

export default Button;
