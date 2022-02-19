import "../styles/style.css";
import { useState } from "react";

const Main = () => {
  const [countNum, setCountNum] = useState(5);

  //function to increase count
  const increaseValue = () => {
    const increaseCount = countNum+1;
    setCountNum(increaseCount);
  };

  //function decrease count
  const decreaseValue = () => {
    const decreaseCount = countNum -1;
    setCountNum(decreaseCount);
  };

  const message =
    countNum === 10
      ? "You have reached the upper limit!"
      : countNum === 0
      ? "You have reached the lower limit!"
      : "";

  const background =
    countNum < 4
      ? "green"
      : countNum >= 4 && countNum <= 7
      ? "blue"
      : countNum > 7
      ? "red"
      : "inherit";

  const hideShow = countNum <= 0 || countNum >= 10 ? "show" : "hide";
 
  return (
    <div className="mainContainer">
      <div className="counterContainer" style={{ backgroundColor: background }}>
        <h1> {countNum} </h1>
      </div>
      <h4 className={hideShow}>
        {message}
      </h4>

      <div className="actionContainer">
        <button
          className="minusBtn"
          onClick={decreaseValue}
          disabled={countNum === 0}
        >
          Decrease
        </button>
        <button
          className="plusBtn"
          onClick={increaseValue}
          disabled={countNum === 10}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default Main;
