import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, reachTimeLimit, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(reachTimeLimit, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [reachTimeLimit, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} className={mode} />;
}
