import Image from 'next/image';
import SidebarCollapsible from './SidebarCollapsible';
import Link from 'next/link';
import { MdOutlineHelpOutline } from 'react-icons/md';

export default function AdminSidebar() {
  return (
    <aside className="relative h-screen w-[285px] bg-[#2A3447] pt-14 text-white">
      <div className="mb-9 flex items-center justify-start gap-3 border-l-[5px] border-[#1AA5CF] bg-[#1aa5cf26] py-4 pl-4 text-xl text-[#1AA5CF]">
        <Image
          style={{ width: 'auto' }}
          className="-mt-1"
          width={20}
          height={20}
          src="/star-part-of-logo.svg"
          alt="Affling Logo"
        />
        <h1 className="font-medium">Dashboard</h1>
      </div>
      <SidebarCollapsible />
      <div className="absolute bottom-5 left-12 text-[#808291]">
        <Link href="/help" className="flex items-center justify-center gap-4">
          <MdOutlineHelpOutline size={24} color="#808291" />
          <div className="text-lg">Help & Center</div>
        </Link>
      </div>
    </aside>
  );
}
