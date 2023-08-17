import Image from 'next/image';

export default function CoverPhoto() {
  return (
    <div className="relative mx-auto mt-5 h-[250px] w-[500] lg:h-[250px] lg:w-[1320px]">
      <Image
        className="lg:rounded-3xl"
        objectFit="cover"
        layout="fill"
        src={'/affiliate-network-details-banner.png'}
        alt={'affiliate-network-details-banner.png'}
      />
    </div>
  );
}
