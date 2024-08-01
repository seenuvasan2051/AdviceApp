// import React from 'react'
import "./Advice.css";
import { useEffect, useState } from "react";

// import axios from "axios";

const Advice = () => {
  const [advice, setAdvice] = useState(
    "Please click the button to get a Advice"
  );

  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setAdvice(data.slip.advice);
    setCount((e) => e + 1);
  }

  // async function getAdvice() {
  //   try {
  //     const response = await axios.get("https://api.adviceslip.com/advice");
  //     setAdvice(response.data.slip.advice);
  //     setCount((e) => e + 1);
  //   } catch (error) {
  //     setAdvice("Failed to fetch advice. Please try again.");
  //   }
  // }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="container">
      <h3>{advice}</h3>
      <button type="button" onClick={getAdvice}>
        Get Advice
      </button>
      <Counter count={count} />
    </div>
  );
};

function Counter(props) {
  // Destructure props to get 'count'
  return (
    <p>
      You have read <span>{props.count}</span> pieces of advice
    </p>
  );
}

export default Advice;
