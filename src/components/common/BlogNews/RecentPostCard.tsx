import Image from 'next/image';

export default function RecentPostCard() {
  return (
    <div className="mb-4 flex gap-4 shadow-md">
      <div>
        <Image
          className="rounded-full"
          src="/p-logo.png"
          alt="recent post image"
          width={91}
          height={91}
        />
      </div>
      <div className="leading-[26px]">
        <h3 className="text-[#4E93D3]">CPA Network</h3>
        <p>PrivateCPA is a new generation performance</p>
        <p>25 Aug, 2022</p>
      </div>
    </div>
  );
}
