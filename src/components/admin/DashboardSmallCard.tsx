import { ReactNode } from 'react';

interface Props {
  title: string;
  icon: ReactNode;
  quantity: string;
}
export default function DashboardSmallCard({ title, icon, quantity }: Props) {
  return (
    <div className="h-[176px] w-[299px] rounded-3xl bg-white p-4">
      {/* --- Icon --- */}
      <div>
        <span className="inline-block rounded bg-[#0F151C0F] p-3">{icon}</span>
      </div>
      {/* --- title --- */}
      <div className="mb-3 mt-7 text-lg font-medium">{title}</div>
      {/* --- quantity --- */}
      <div className="text-lg font-medium">
        <span className="inline-block rounded bg-[#0F151C0F] px-4">
          {quantity}
        </span>
      </div>
    </div>
  );
}
