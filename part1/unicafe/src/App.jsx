import { useState } from "react";
import Buttons from "./components/Buttons";
import Total from "./components/Total";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const HandleGoodButton = () => {
    setGood(good + 1);
  };

  const HandleNeutralButton = () => {
    setNeutral(neutral + 1);
  };

  const HandleBadButton = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <h1>Give feedback</h1>
      <Buttons onClick={HandleGoodButton} text="good" />
      <Buttons onClick={HandleNeutralButton} text="neutral" />
      <Buttons onClick={HandleBadButton} text="bad" />
      <h2>Statistics</h2>
      <Total good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
