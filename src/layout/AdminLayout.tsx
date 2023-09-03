import AdminSidebar from '@/components/admin/AdminSidebar';
import Head from 'next/head';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <style>{`body { 
          background-color: #2A3447; 
        }`}</style>
      </Head>
      <div className="flex flex-col lg:flex-row font-gordita">
        <AdminSidebar />
        {children}
      </div>
    </>
  );
}
