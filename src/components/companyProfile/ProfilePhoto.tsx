import Image from 'next/image';

interface IBannerImage {
  bannerImageUrl: string;
  bannerImageAlt: string;
}

export default function ProfilePhoto({
  bannerImageUrl,
  bannerImageAlt,
}: IBannerImage) {
  return (
    <div className="relative flex h-[252px] w-[252px] items-center justify-center rounded-full border-4 bg-white">
      <Image
        className="rounded-full object-cover"
        src={bannerImageUrl}
        alt={bannerImageAlt}
        layout="fill"
      />
    </div>
  );
}
