import React, { useState } from 'react';

interface Props {
  text: string;
}

const Description = ({ text }: Props) => {
  const maxLength = 500;

  const [showFullDescription, setShowFullDescription] = useState(
    text.length <= maxLength
  );

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="text-justify text-base font-normal leading-relaxed text-black">
      {showFullDescription ? (
        <p>{text}</p>
      ) : (
        <>
          <p className="inline ">{text.slice(0, maxLength)}...</p>
          <button className="font-bold" onClick={toggleDescription}>
            See More
          </button>
        </>
      )}
    </div>
  );
};

export default Description;
