import PropTypes from 'prop-types';
import { JetBrains_Mono } from "next/font/google";
import { useEffect, useState, useRef } from "react";

const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default function AnimatedCircularProgressBar({
  max = 100,
  min = 0,
  value = 100,          //default
  gaugePrimaryColor,
  gaugeSecondaryColor,
  className, // Tailwind class for size (e.g., w-36 h-36)
  showPercentage=true
}) {
  const [animatedValue, setAnimatedValue] = useState(0); // State to handle smooth animation
  const containerRef = useRef(null); // Reference to get the actual size of the component

  const size = containerRef.current?.offsetWidth || 147; // Default to 147 if size isn't available
  const radius = (size - 10) / 2; // Calculate radius dynamically (size minus stroke width)
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  useEffect(() => {
    // Trigger animation when the value changes
    const timeout = setTimeout(() => {
      setAnimatedValue(value); // Smoothly animate to the desired value
    }, 200); // Delay animation start slightly
    return () => clearTimeout(timeout);
  }, [value]);

  const percent = Math.min(Math.max(((animatedValue - min) / (max - min)) * 100, 0), 100); // Clamp percent between 0 and 100
  const dashOffset = circumference - (percent / 100) * circumference; // Calculate stroke-dashoffset

  return (
    <div
      ref={containerRef} // Reference to calculate size dynamically
      className={`relative ${className}`} // Use Tailwind classes for sizing
    >
      <svg
        className="absolute inset-0"
        width={size} // Use dynamically calculated size
        height={size} // Use dynamically calculated size
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Secondary Gauge (Background Circle) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={gaugeSecondaryColor}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset="0"
          strokeLinecap="round"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center",
          }}
        />
        {/* Primary Gauge (Animated Progress Circle) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={gaugePrimaryColor}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center",
            transition: "stroke-dashoffset 1s ease-in-out", // Animation for the progress
          }}
        />
      </svg>
      {/* Value in the center */}
      {/* if showPercentage prop is true then percentage will get visible */}
     {showPercentage? <h4 className="common-h4-heading absolute inset-0 flex flex-col items-center justify-center text-black font-bold text-lg top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 ">
        {Math.round(percent)}%{" "}
        <div className={"common-all-caps custom-text-grey400 " + jetBrains_Mono.className}>
          Match
        </div>
      </h4>:null}
    </div>
  );
}


AnimatedCircularProgressBar.PropTypes={
  max: PropTypes.number, // Maximum value for the progress bar
  min: PropTypes.number, // Minimum value for the progress bar
  value: PropTypes.number, // Current value (required)
  gaugePrimaryColor: PropTypes.string, // Color for the progress
  gaugeSecondaryColor: PropTypes.string, // Background circle color
  className: PropTypes.string, // Tailwind classes for size
  showPercentage: PropTypes.bool, // Whether to show percentage inside the circle
}