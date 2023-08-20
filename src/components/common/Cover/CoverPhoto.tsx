import Image from 'next/image';

interface IBannerImage {
  bannerImageUrl: string,
  bannerImageAlt:string
}

export default function CoverPhoto({bannerImageUrl, bannerImageAlt}: IBannerImage) {
  return (
    <div className="relative mx-auto mt-5 h-[250px] w-[500] lg:h-[250px] lg:w-[1320px]">
      <Image
        className="lg:rounded-3xl"
        objectFit="cover"
        layout="fill"
        src={bannerImageUrl}
        alt={bannerImageAlt}
      />
    </div>
  );
}
