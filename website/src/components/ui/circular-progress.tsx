import React from "react";

interface CircularProgressProps {
  percentage: number;
  label: string;
  size: number; // size in pixels
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, label, size }) => {
  const radius = size / 2 - 5; // account for stroke width
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg
        width={size}
        height={size}
        className="transform rotate-[-90deg]" // to start the circle at the top
      >
        <circle
          className="text-gray-300"
          strokeWidth="5"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="text-purple-500"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <span className="mt-2 text-sm font-semibold">{label}</span>
      <span className="text-lg font-bold">{percentage}%</span>
    </div>
  );
};

export default CircularProgress;