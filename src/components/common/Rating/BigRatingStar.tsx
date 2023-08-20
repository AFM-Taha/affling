import Image from 'next/image';

export default function BigRatingStar() {
  return (
    <div className="relative -top-12 mx-auto h-48 w-48 rounded-full lg:h-[323px] lg:w-[323px]">
      <Image
        src={'/big-rating-star-container.webp'}
        alt="big-rating-star-container."
        width={323}
        height={323}
      />
      <p className="absolute  left-[56px] top-[70px] text-5xl font-bold  text-[#E7B228] lg:left-[110px] lg:top-[140px] lg:text-6xl">
        4.9
      </p>
    </div>
  );
}
