import Image from 'next/image';
import SidebarCollapsible from './SidebarCollapsible';
import Link from 'next/link';
import { MdOutlineHelpOutline } from 'react-icons/md';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import AdminMenu from './AdminMenu';

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <aside className="relative hidden h-screen w-[285px] border-x border-x-[#3f4e69] bg-[#2A3447] pt-14 text-white lg:block">
        <Link href={'/admin/dashboard'}>
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
        </Link>
        <SidebarCollapsible />
        <div className="absolute bottom-5 left-12 text-[#808291]">
          <Link href="/help" className="flex items-center justify-center gap-4">
            <MdOutlineHelpOutline size={24} color="#808291" />
            <div className="text-lg">Help & Center</div>
          </Link>
        </div>
      </aside>

      {/* Hamburger Menu */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="border-1 m-3 block rounded-md border border-[#576c93] p-1">
          <HiMenu color="#a0a0a0" size={24} />
        </button>
        <AdminMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}
