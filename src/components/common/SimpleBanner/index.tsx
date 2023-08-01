import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  img:string
}

const SimpleBanner = ({ children, className,img }: Props) => {
  return (
    <div
      className={` ${className} mb-[50px] h-[580px]  ${img} text-white    bg-cover bg-center   bg-no-repeat `}>
      <div className="h-[580px] bg-[#4E93D3] opacity-80">
        <h2 className="pt-[170px] text-center text-5xl font-bold leading-[50px] text-white opacity-100">
          {children}
        </h2>
      </div>
    </div>
  );
};

export default SimpleBanner;
