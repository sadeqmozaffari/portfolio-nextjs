import React from 'react';

const Loading = () => {
  return (
    <div className="absolute inset-0  flex justify-center items-center z-10 ">
      <div className="animate-spin rounded-full h-20  w-20 border-t-4 border-sky-600" />
    </div>
  );
};

export default Loading;
