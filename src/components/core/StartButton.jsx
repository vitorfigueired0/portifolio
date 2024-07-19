import React from 'react';

export const StartButton = ({ onClick }) => {
  const buttonStyle = 'w-[300px] h-[100px] bg-middleRed rounded-full font-custom text-darkMain text-3xl hover:bg-darkRed';

  return (
    <div>
      <button onClick={onClick} className={buttonStyle}>START</button>
    </div>
  );
};
