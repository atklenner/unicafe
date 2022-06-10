import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handler={() => setGood(good + 1)} text="good" />
      <Button handler={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handler={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  let total = good + neutral + bad;
  return (
    <div>
      {total > 0 ? (
        <div>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={total} />
          <StatisticsLine text="average" value={(good - bad) / total} />
          <StatisticsLine text="positive" value={good / total} />
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

const StatisticsLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Button = ({ text, handler }) => {
  return <button onClick={handler}>{text}</button>;
};

export default App;
