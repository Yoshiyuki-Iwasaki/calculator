import React from "react";
import Button from "../../atoms/button";
import Result from "../../atoms/result";
import { Main, ButtonArea, NumberArea, Number, Operator } from "./style";

const Calculator = () => {
  return (
    <Main>
      <Result result={"計算結果"} />
      <ButtonArea>
        <NumberArea>
          <Number>
            <Button text={7} />
            <Button text={8} />
            <Button text={9} />
          </Number>
          <Number>
            <Button text={4} />
            <Button text={5} />
            <Button text={6} />
          </Number>
          <Number>
            <Button text={1} />
            <Button text={2} />
            <Button text={3} />
          </Number>
          <Number>
            <Button text={"AC"} />
            <Button text={0} />
            <Button text={"="} />
          </Number>
        </NumberArea>
        <Operator>
          <Button text={"÷"} />
          <Button text={"×"} />
          <Button text={"−"} />
          <Button text={"+"} />
        </Operator>
      </ButtonArea>
    </Main>
  );
};

export default Calculator;
