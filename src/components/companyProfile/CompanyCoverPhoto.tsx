import Image from 'next/image';

interface IBannerImage {
  bannerImageUrl: string;
  bannerImageAlt: string;
}

export default function CompanyCoverPhoto({
  bannerImageUrl,
  bannerImageAlt,
}: IBannerImage) {
  return (
    <div className="hidden lg:block">
      <Image
        width={1320}
        height={250}
        className=" rounded-[20px] object-cover"
        src={bannerImageUrl}
        alt={bannerImageAlt}
      />
    </div>
  );
}
