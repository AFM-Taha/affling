import Footer from '@/components/common/Footer';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="bg-[#ffffff]">
      <div className="">Navbar</div>
      {children}
      <Footer />
    </div>
  );
}
