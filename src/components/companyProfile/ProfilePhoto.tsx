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
    <div className="h-[252px] w-[252px] rounded-full bg-white border-4 flex justify-center items-center">
      <Image
        width={232}
        height={232}
        className=" rounded-[20px] object-cover"
        src={bannerImageUrl}
        alt={bannerImageAlt}
        content='fill'
      />
    </div>
  );
}
