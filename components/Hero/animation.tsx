"use client";
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

const LottieAnimation = ({animationUrl, height = "300px", width = "300px"}) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch(animationUrl);
        const jsonData = await response.json();
        setAnimationData(jsonData);
      } catch (error) {
        console.error('Error fetching animation data:', error);
      }
    };

    fetchAnimationData();
  }, [animationUrl]);

  if (!animationData) {
    return null; // You might want to show a loading indicator here
  }

  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{ height: height, width: width }}
    />
  );
};

export default LottieAnimation;
