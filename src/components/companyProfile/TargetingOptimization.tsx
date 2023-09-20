import React from 'react';
import { targetingOptimization } from '@/assets/static-data/inputFormText';
import { BsFillCheckCircleFill, BsXCircleFill } from 'react-icons/bs';

interface Props {
  targets: any[];
}

const TargetingOptimization = ({ targets }: Props) => {
  const targeting_optimization = targets;

  // Update the isSelected property based on targeting_optimization
  const updatedTargetingOptimization = targetingOptimization.map((item) => ({
    ...item,
    isSelected: targeting_optimization.includes(item.label),
  }));

  return (
    <div className="grid grid-cols-2 text-sm text-zinc-800  ">
      {updatedTargetingOptimization.map((item) => (
        <div
          key={item.id}
          className="mb-2 flex items-center justify-between border-b bg-white px-5 font-bold leading-[29.12px]  shadow-xl">
          <p>{item.label}</p>
          {item.isSelected ? <BsFillCheckCircleFill /> : <BsXCircleFill />}
        </div>
      ))}
    </div>
  );
};

export default TargetingOptimization;
