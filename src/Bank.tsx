

import React, { useEffect, useState } from 'react';

const Bank: React.FC = () => {
  const [countdown, setCountdown] = useState<number>(0);

  useEffect(() => {
    const targetDate = new Date('2024-08-28T00:00:00Z').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setCountdown(0);
      } else {
        setCountdown(distance);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div>
      <h1>Bank Page</h1>
      <p>Countdown: {formatTime(countdown)}</p>
    </div>
  );
};

export default Bank;
