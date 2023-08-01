import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="bg-[#ffffff]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
