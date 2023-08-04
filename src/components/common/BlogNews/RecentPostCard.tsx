import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  date: string;
}

export default function RecentPostCard({ title, description, date }: Props) {
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
        <h3 className="text-[#4E93D3]">{title}</h3>
        <p>{description}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}
