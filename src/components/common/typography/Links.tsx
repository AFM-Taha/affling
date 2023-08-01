import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  link: string;
}

export const FooterLink = ({ children, className, link }: Props) => {
  return (
    <Link href={link} className={`block ${className}`}>
      {children}
    </Link>
  );
};
