import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}
export const Para20 = ({ children, className }: Props) => {
  return <p className={`para mb-5 ${className}`}>{children}</p>;
};

export const Para50 = ({ children, className }: Props) => {
  return <p className={`para mb-[50px] ${className}`}>{children}</p>;
};
