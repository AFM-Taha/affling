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
    <div className="relative h-[250px] lg:h-[250px] lg:w-[500] xl:w-[1320px]">
      <Image
        layout="fill"
        className="rounded-[20px] object-cover"
        src={bannerImageUrl}
        alt={bannerImageAlt}
      />
    </div>
  );
}
