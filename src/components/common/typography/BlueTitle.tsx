import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}
const BlueTitle = ({ children, className }: Props) => {
  return <h3 className={`blue-title mb-5 ${className}`}>{children}</h3>;
};

export default BlueTitle;
