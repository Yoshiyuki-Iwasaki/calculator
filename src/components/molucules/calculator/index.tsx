import Button from "../../atoms/button";
import Result from "../../atoms/result";
import { connect } from "react-redux";
import {
  onNumberClick,
  onPlusClick,
  onMinusClick,
  onMultiplyClick,
  onDivideClick,
  onEqualClick,
  onClearClick,
} from "../../../redux/actions";
import { Main, ButtonArea, NumberArea, Number, Operator } from "./style";

const Calculator = (props: any) => {
  const {
    calculator,
    onNumberClick,
    onPlusClick,
    onMinusClick,
    onMultiplyClick,
    onDivideClick,
    onEqualClick,
    onClearClick,
  } = props;
  return (
    <Main>
      <Result
        result={
          calculator.showingResult
            ? calculator.resultValue
            : calculator.inputValue
        }
      />
      <ButtonArea>
        <NumberArea>
          <Number>
            <Button text={7} onClick={() => onNumberClick(7)} />
            <Button text={8} onClick={() => onNumberClick(8)} />
            <Button text={9} onClick={() => onNumberClick(9)} />
          </Number>
          <Number>
            <Button text={4} onClick={() => onNumberClick(4)} />
            <Button text={5} onClick={() => onNumberClick(5)} />
            <Button text={6} onClick={() => onNumberClick(6)} />
          </Number>
          <Number>
            <Button text={1} onClick={() => onNumberClick(1)} />
            <Button text={2} onClick={() => onNumberClick(2)} />
            <Button text={3} onClick={() => onNumberClick(3)} />
          </Number>
          <Number>
            <Button text={"AC"} onClick={() => onClearClick()} />
            <Button text={0} onClick={() => onNumberClick(0)} />
            <Button text={"="} onClick={() => onEqualClick()} />
          </Number>
        </NumberArea>
        <Operator>
          <Button text={"÷"} onClick={() => onDivideClick()} />
          <Button text={"×"} onClick={() => onMultiplyClick()} />
          <Button text={"−"} onClick={() => onMinusClick()} />
          <Button text={"+"} onClick={() => onPlusClick()} />
        </Operator>
      </ButtonArea>
    </Main>
  );
};

const mapStateToProps = (state: any) => {
  return {
    calculator: state.calculator,
  };
};

export default connect(mapStateToProps, {
  onNumberClick,
  onPlusClick,
  onMinusClick,
  onMultiplyClick,
  onDivideClick,
  onEqualClick,
  onClearClick,
})(Calculator);
