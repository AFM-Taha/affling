import Image from 'next/image';

export default function AdminSidebar() {
  return (
    <aside className="h-screen w-[285px] bg-[#171616] pt-14 text-white">
      <div className="flex items-center justify-start gap-3 border-l-[5px] border-[#1AA5CF] bg-[#1aa5cf26] py-4 pl-4 text-xl text-[#1AA5CF]">
        <Image
          className="-mt-1"
          width={20}
          height={20}
          src="/star-part-of-logo.svg"
          alt="Affling Logo"
        />
        <h1>Dashboard</h1>
      </div>
    </aside>
  );
}
