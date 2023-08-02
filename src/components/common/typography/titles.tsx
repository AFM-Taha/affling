import { ReactNode } from 'react';

interface BlueTitle {
  children: ReactNode;
  className?: string;
}
interface BlueTitleNum {
  children: ReactNode;
  className?: string;
  num: number;
}

export const BlueTitle = ({ children, className }: BlueTitle) => {
  return <h3 className={`blue-title mb-5 ${className}`}>{children}</h3>;
};

export const BlueTitleNum = ({ children, className, num }: BlueTitleNum) => {
  return (
    <h3 className={`blue-title mb-5 ${className}`}>
      <span
        className={`mr-7 rounded-full bg-[#4e93d3]  ${
          num === 1 ? 'px-3' : 'px-2.5'
        } 
        ${num < 10 ? 'py-0.5' : 'py-1.5'}
        
         font-bold text-white`}>
        {num}
      </span>
      {children}
    </h3>
  );
};
