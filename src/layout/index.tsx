import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import AdminLayout from './AdminLayout';
import UserLayout from './UserLayout';
import ActiveSectionContextProvider from '@/context/active-section-context';
import AdminLoginLayout from './AdminLoginLayout';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const path = useRouter().pathname;

  if (path === '/admin/login')
    return <AdminLoginLayout>{children}</AdminLoginLayout>;

  if (path.includes('admin'))
    return (
      <ActiveSectionContextProvider>
        <AdminLayout>{children}</AdminLayout>
      </ActiveSectionContextProvider>
    );
  return <UserLayout>{children}</UserLayout>;
}
