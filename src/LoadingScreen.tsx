import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './LoadingScreen.css'; // Ensure this CSS file is styled appropriately

const LoadingScreen: React.FC<{ onLoaded: () => void }> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('Aequor Finance');

  const props = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.9)' },
    config: { tension: 200, friction: 30 },
  });

  const progressBarProps = useSpring({
    width: `${progress}%`,
    from: { width: '0%' },
    config: { tension: 200, friction: 30 },
  });

  useEffect(() => {
    const progressSteps = [
      { percentage: 15, text: "Diving into ocean depths" },
      { percentage: 30, text: "Scooping mermaids" },
      { percentage: 45, text: "Swimming" },
      { percentage: 60, text: "Diving" },
      { percentage: 75, text: "Almost at ocean depth" },
      { percentage: 100, text: "Meeting Poseidon" },
    ];

    const interval = setInterval(() => {
      setProgress(prev => {
        const nextProgress = prev + 1;
        const step = progressSteps.find(step => step.percentage === nextProgress);
        if (step) {
          setText(step.text);
        }
        if (nextProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoaded();
          }, 500); // Optional delay before transitioning
        }
        return nextProgress;
      });
    }, 30); // Adjust the speed of the progress bar

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <animated.div className="loading-screen" style={props}>
      <div className="loading-content">
        <img src="/chest.PNG" alt="Loading" className="loading-image" />
        <p>{text}</p>
        <div className="progress-bar">
          <animated.div
            className="progress-fill"
            style={progressBarProps}
          />
        </div>
      </div>
    </animated.div>
  );
};

export default LoadingScreen;
