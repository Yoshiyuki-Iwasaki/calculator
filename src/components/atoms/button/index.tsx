import React from "react";
import { ButtonType } from "./type";
import { ButtonLayout } from "./style";

const Button: React.FC<ButtonType> = ({ text, onClick }) => {
  return <ButtonLayout onClick={onClick}>{text}</ButtonLayout>;
};

export default Button;
