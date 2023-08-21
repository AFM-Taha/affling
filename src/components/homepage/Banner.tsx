import Image from 'next/image';

const Banner = () => {
  return (
    <div>
      <Image
        src="/Home/Banner.svg"
        alt="banner"
        width={1500}
        height={413}
      />
    </div>
  );
};

export default Banner;
