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
  const commonClass = 'mr-7 rounded-full bg-[#4e93d3] font-bold text-white';
  return (
    <h3 className={`blue-title mb-5 ${className}`}>
      {num === 11 && (
        <span
          className={`   px-3 ${
            num >= 10 && 'py-2.5 text-[18px]'
          }  ${commonClass}`}>
          {num}
        </span>
      )}
      
      {num === 1 && (
        <span className={`px-3 py-0.5 ${commonClass}`}>{num}</span>
      )}

      {num > 1 && num < 10 && (
        <span className={`px-3 py-1 ${commonClass}`}>{num}</span>
      )}

      {(num === 10 || num === 12) && (
        <span className={`px-1 py-1 ${commonClass}`}>{num}</span>
      )}

      {children}
    </h3>
  );
};
