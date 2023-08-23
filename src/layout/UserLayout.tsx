import Footer2 from '@/components/common/Footer/Footer2';
import Navbar from '@/components/common/Navbar';
import { ReactNode } from 'react';

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto bg-[#ffffff]">
      <Navbar />
      {children}
      <Footer2 />
    </div>
  );
}
