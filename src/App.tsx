// import logo from './logo.svg';
import "./App.css";
import Button from "./components/atoms/button";
import Result from "./components/atoms/result";

const App = () => {
  return (
    <>
      <Result result={"計算結果"} />
      <div>
        <Button text={"÷"} />
        <Button text={"×"} />
        <Button text={"−"} />
        <Button text={"+"} />
      </div>
      <div>
        <Button text={7} />
        <Button text={8} />
        <Button text={9} />
      </div>
      <div>
        <Button text={4} />
        <Button text={5} />
        <Button text={6} />
      </div>
      <div>
        <Button text={1} />
        <Button text={2} />
        <Button text={3} />
      </div>
      <div>
        <Button text={0} />
        <Button text={"AC"} />
        <Button text={"="} />
      </div>
    </>
  );
};

export default App;
