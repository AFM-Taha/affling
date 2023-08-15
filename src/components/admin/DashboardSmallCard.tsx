import { ReactNode } from 'react';

interface Props {
  title: string;
  icon: ReactNode;
  quantity: string;
  bg: string;
}
export default function DashboardSmallCard({
  title,
  icon,
  quantity,
  bg,
}: Props) {
  if (bg) console.log(bg);
  return (
    <div
      // style={{ backgroundColor: bg }}
      className={`h-[176px] w-[299px] rounded-3xl bg-[${bg}] bg-opacity-10 p-4 text-white`}>
      {/* --- Icon --- */}
      <div>
        <span className="inline-block rounded p-3">{icon}</span>
      </div>
      {/* --- title --- */}
      <div className="mb-3 mt-7 text-lg font-medium">{title}</div>
      {/* --- quantity --- */}
      <div className="text-lg font-medium">
        <span className="inline-block rounded px-4">{quantity}</span>
      </div>
    </div>
  );
}
