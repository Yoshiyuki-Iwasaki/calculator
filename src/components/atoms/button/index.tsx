import React from "react";
import { ButtonType } from "./type";
import { ButtonLayout } from "./style";

const Button: React.FC<ButtonType> = ({ text }) => {
  return <ButtonLayout>{text}</ButtonLayout>;
};

export default Button;
