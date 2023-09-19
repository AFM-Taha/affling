import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const AffiliatePrograms = ({ programData }: any) => {
  const [visibleItems, setVisibleItems] = useState(4);

  const router = useRouter();

  const handleSeeMoreClick = () => {
    setVisibleItems(visibleItems + 4);
  };
  return (
    <div>
      <div className="customShadow">
        <div className="bg-[#E9F3F2] px-6 py-3">
          <h2 className="text-[26px] font-bold ">Affiliate Program</h2>
        </div>

        <div>
          {programData?.slice(0, visibleItems).map((el: any, index: any) => (
            <div
              key={index}
              onClick={() =>
                router.push(`/affiliate-program/${el._id}/profile`)
              }
              className=" flex cursor-pointer flex-col justify-between border-b px-1 py-5 hover:bg-black/10 md:flex-row lg:px-3">
              <div className="flex flex-col space-x-6 md:flex-row lg:basis-11/12">
                <div className="pl-5 lg:basis-2/12 lg:pl-0">
                  <Image
                    // src={el.image}
                    src="/Home/AdvertisingNetwork/1.svg"
                    width={172}
                    height={172}
                    alt="advertise_network"
                    className=""
                  />
                </div>
                <div className="lg:basis-11/12">
                  <h2 className="font-bold capitalize">{el.title}</h2>
                  <p>{el.program_type}</p>
                  <div className="flex items-center space-x-8">
                    <div className="flex ">
                      <AiFillStar className="text-[#FFAB2D]" />
                      <AiFillStar className="text-[#FFAB2D]" />
                      <AiFillStar className="text-[#FFAB2D]" />
                      <AiFillStar className="text-[#FFAB2D]" />
                      <AiFillStar className="text-[#FFAB2D]" />
                    </div>
                    {/* <p className="py-3">{el.description}</p> */}
                    <p className="py-3">
                      TopClientOffer Is The leading performance marketing
                      Company. TCO is one of the worlds best CPA network.
                    </p>
                    <div className="flex flex-row font-bold lg:space-x-7">
                      <p>Comision Type</p>
                      <p>/ Tracking</p>
                      <p>/ Monthly</p>
                    </div>
                  </div>
                </div>
                <div className="ml-5 mt-5 lg:ml-0">
                  <Link
                    href={el.network_url}
                    className="rounded-lg bg-[#4E93D3] px-4 py-3 font-bold text-white md:mr-12 lg:mr-2">
                    <button>Join Now</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        {visibleItems < programData?.length && (
          <button
            className="my-3 rounded-lg border-2 border-[Orange] px-3 py-2"
            onClick={handleSeeMoreClick}>
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default AffiliatePrograms;
