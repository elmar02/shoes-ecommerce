import React, { useEffect, useState } from 'react'

const Timer = ({targetDate}) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(
    {
      days:"00",
      hours:"00",
      minutes:"00",
      seconds:"00"
    }
  );

  useEffect(() => {
    setTimeLeft(calculateTimeLeft)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <div className='bars flex space-x-5 text-center'>
      <div className="bar bg-yellow-400 rounded-md text-black font-bold p-2">
        <div className="time">{timeLeft.days}</div>
        <h1 className="title text-xs">Days</h1>
      </div>
      <div className="bar bg-yellow-400 rounded-md text-black font-bold p-2">
        <div className="time">{timeLeft.hours}</div>
        <h1 className="title text-xs">Hours</h1>
      </div>
      <div className="bar bg-yellow-400 rounded-md text-black font-bold p-2">
        <div className="time">{timeLeft.minutes}</div>
        <h1 className="title text-xs">Minutes</h1>
      </div>
      <div className="bar bg-yellow-400 rounded-md text-black font-bold p-2">
        <div className="time">{timeLeft.seconds}</div>
        <h1 className="title text-xs">Seconds</h1>
      </div>
    </div>
  )
}

export default Timer