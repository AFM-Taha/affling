import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  img: string;
  description?: string;
  subdescription?: string;
}

const SimpleBanner = ({
  children,
  className,
  img,
  description,
  subdescription,
}: Props) => {
  return (
    <div
      className={` ${className} mb-[50px] h-[580px]  ${img} bg-cover    bg-center bg-no-repeat   text-white `}>
      <div className="h-[580px] bg-[#4E93D3] text-center opacity-80">
        <h2 className="pt-[170px] text-center text-5xl font-bold leading-[50px] text-white opacity-100">
          {children}
        </h2>
        <p className="my-3 text-4xl font-bold">{description}</p>
        <p className="font-bold">{subdescription}</p>
      </div>
    </div>
  );
};

export default SimpleBanner;
