import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import AdminLayout from './AdminLayout';
import UserLayout from './UserLayout';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const path = useRouter().pathname;

  if (path.includes('admin')) return <AdminLayout>{children}</AdminLayout>;
  return <UserLayout>{children}</UserLayout>;
}
