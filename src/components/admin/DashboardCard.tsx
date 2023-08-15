interface Props {
  title: string;
  quantity: string;
  time: string;
}

export default function DashboardCard({ title, quantity, time }: Props) {
  return (
    <div className="max-h-[176px] max-w-[613px] rounded-xl bg-white p-[18px] pr-14  xl:h-[176px] xl:w-[613px]">
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-lg font-medium">{quantity}</p>

      <hr className="mb-3 mt-5 h-[6px] rounded-2xl bg-[#5FD078]" />

      <div className="flex items-center gap-2">
        <div className="h-[7px] w-[7px] rounded-full bg-[#5FD078]"></div>
        <div className="text-[12px] font-medium text-[#808291]">Last</div>
      </div>
      <div className="mt-2 text-[14px] font-medium">{time}</div>
    </div>
  );
}
