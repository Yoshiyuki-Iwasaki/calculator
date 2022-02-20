import {
  INPUT_NUMBER,
  PLUS,
  MINUS,
  MULTIPLY,
  DIVIDE,
  EQUAL,
  CLEAR,
} from "../actions/type";

const initialAppState = {
  inputValue: 0,
  operator: "",
  resultValue: 0,
  calculate: false,
  showingResult: false,
};

const Calculator = (state = initialAppState, action: any) => {
  switch (action.type) {
    case INPUT_NUMBER:
      return {
        ...state,
        inputValue: state.inputValue * 10 + action.number,
        showingResult: false,
      };
    case PLUS:
      if (state.calculate) {
        return {
          ...state,
          inputValue: 0,
          operator: "+",
          resultValue: state.resultValue + state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: "+",
          calculator: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }
    case MINUS:
      if (state.calculate) {
        return {
          ...state,
          inputValue: 0,
          operator: "-",
          resultValue: state.resultValue - state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: "-",
          calculator: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }
    case MULTIPLY:
      if (state.calculate) {
        return {
          ...state,
          inputValue: 0,
          operator: "*",
          resultValue: state.resultValue * state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: "*",
          calculator: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }
    case DIVIDE:
      if (state.calculate) {
        return {
          ...state,
          inputValue: 0,
          operator: "/",
          resultValue: state.resultValue / state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: "/",
          calculator: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }
    case CLEAR:
      return {
        inputValue: 0,
        operator: "",
        calculator: false,
        resultValue: 0,
        showingResult: false,
      };
    case EQUAL:
      switch (state.operator) {
        case "+":
          return {
            inputValue: state.resultValue + state.inputValue,
            operator: "",
            calculator: false,
            resultValue: state.resultValue + state.inputValue,
            showingResult: true,
          };
        case "-":
          return {
            inputValue: state.resultValue - state.inputValue,
            operator: "",
            calculator: false,
            resultValue: state.resultValue - state.inputValue,
            showingResult: true,
          };
        case "*":
          return {
            inputValue: state.resultValue * state.inputValue,
            operator: "",
            calculator: false,
            resultValue: state.resultValue * state.inputValue,
            showingResult: true,
          };
        case "/":
          return {
            inputValue: state.resultValue / state.inputValue,
            operator: "",
            calculator: false,
            resultValue: state.resultValue / state.inputValue,
            showingResult: true,
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default Calculator;
