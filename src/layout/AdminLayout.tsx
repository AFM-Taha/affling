import AdminSidebar from '@/components/admin/AdminSidebar';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex font-gordita">
      <AdminSidebar />
      {children}
    </div>
  );
}
