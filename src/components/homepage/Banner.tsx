import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="customShadow px-5 lg:px-8 my-2">
      <div className="flex flex-col-reverse items-center justify-center space-y-5 lg:flex-row lg:space-y-0">
        <div className="basis-1/2 py-3">
          <h2 className="text-2xl font-bold text-red-500 lg:text-6xl">
            TopClientOffer
          </h2>
          <h4 className="py-4 text-xl font-semibold lg:py-6  lg:text-4xl">
            High traffic monetization CPA <br /> Network
          </h4>
          <div className="flex space-x-5">
            <Link href="affiliate" className="">
              <button className="font-500 rounded-lg bg-red-500 px-8 py-2 text-white">
                Affiliate
              </button>
            </Link>
            <Link href="advertise" className="">
              <button className="font-500 rounded-lg bg-black px-12 py-2 text-white">
                Advertise
              </button>
            </Link>
          </div>
        </div>
        <div className="basis-1/2">
          <Image
            src="/Home/banner.png"
            width={600}
            height={600}
            alt="tracking-software-image"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
