import React, { useState } from 'react';

const Description = ({}) => {
    const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor tincidunt ultrices volutpat lacus. Egestas sit leo pharetra id risus ac mauris neque. Neque a amet, arcu pulvinar eu. Aliquet nibh leo vel diam feugiat. Ullamcorper suspendisse sit accumsan sollicitudin porta mattis. Orci pretium vulputate donec purus nibh odio non et sit.Id sed urna, amet ut egestas id. Id mauris elit integer cras cras a. Tempus, molestie penatibus fermentum egestas purus ornare urna diam. Sit condimentum in leo nulla massa adipiscing faucibus facilisis enim. Neque habitasse sit amet, commodoSagittis curabitur arcu, ac dui in fermentum, at. Dignissim et lobortis egestas tincidunt adipiscing ultrices. Penatibus id mi est vel rutrum sed auctor. Eu erat facilisis eu nisi scelerisque sed";
  const maxLength = 500; 

  const [showFullDescription, setShowFullDescription] = useState(
    description.length <= maxLength
  );

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className='text-justify text-black text-base font-normal leading-relaxed'>
      {showFullDescription ? (
        <p>{description}</p>
      ) : (
        <>
          <p className='inline '>{description.slice(0, maxLength)}...</p>
          <button className='font-bold' onClick={toggleDescription}>See More</button>
        </>
      )}
    </div>
  );
};

export default Description;
