import Image from 'next/image';

export default function BigRatingStar() {
  return (
    <div className="relative -top-12 rounded-full lg:h-[323px] lg:w-[323px]">
      <Image
        src={'/big-rating-star-container.png'}
        alt="big-rating-star-container."
        width={323}
        height={323}
      />
      <p className="absolute left-[122px] top-[190px] text-5xl font-bold text-[#E7B228]">
        4.9
      </p>
    </div>
  );
}
