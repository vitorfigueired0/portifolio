import React from 'react';

export const StartButton = ({ onClick }) => {

  const buttonStyle = 'bg-middleRed p-4';

  return (
    <div className="relative top-24 text-white">
      <button onClick={onClick} className={buttonStyle}>START</button>
    </div>
  );
};
