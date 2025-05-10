import React from 'react';

const Logo = () => (
  <div className="flex items-center text-3xl font-bold text-indigo-600">
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-2"
    >
      <path
        d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z"
        fill="#4F46E5"
        fillOpacity="0.2"
      />
      <path
        d="M23 10L16 5L9 10V20L16 25L23 20V10Z"
        stroke="#4F46E5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 15V20"
        stroke="#4F46E5"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="12" r="1.5" fill="#4F46E5" />
    </svg>
    Actory.ai
  </div>
);

export default Logo;
