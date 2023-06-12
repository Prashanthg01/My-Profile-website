import React, { useState, useEffect } from 'react';

function Time() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const options = { timeZone: 'Asia/Kolkata', hour12: true };
      const formattedTime = date.toLocaleTimeString('en-IN', options);
      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='live'>
      <p>{time}</p>
    </div>
  );
}

export default Time;
