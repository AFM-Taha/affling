import AdminSidebar from '@/components/admin/AdminSidebar';
import useToken from '@/hooks/useToken';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { push } = useRouter();
  const token = useToken();

  useEffect(() => {
    if (!token) push('/admin/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <style>{`body { 
          background-color: #2A3447; 
        }`}</style>
      </Head>
      <div className="flex flex-col font-gordita lg:flex-row">
        <AdminSidebar />
        {children}
      </div>
    </>
  );
}
