// src/components/IntroAnimation.js
import React, { useEffect, useState } from 'react';
import './IntroAnimation.css';

const IntroAnimation = () => {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationDone(true);
    }, 4800); // 4000ms = 4 seconds

    return () => {
      clearTimeout(animationTimeout); // Cleanup timeout on unmount or animation completion
    };
  }, []);

  return (
    <div className={`intro-animation ${animationDone ? 'animation-done' : ''}`}>
      {!animationDone && (
        <div className="gif-container">
          <img src="/daddywilson.gif" alt="Intro Animation" className="gif" />
          {/* Optionally, you can add content overlay or additional elements */}
          <div className="content">
          
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroAnimation;