// import { AffiliateNetworksData } from '@/assets/static-data/homepage/affiliateNetworksData';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const AffiliateNetworks = ({ programData }: any) => {
  // console.log('programData', programData);
  const [visibleItems, setVisibleItems] = useState(4);

  const handleSeeMoreClick = () => {
    setVisibleItems(visibleItems + 4);
  };

  return (
    <div>
      <div className="customShadow">
        <div className="bg-[#E9F3F2] px-6 py-3">
          <h2 className="text-[26px] font-bold ">Affiliate Network</h2>
        </div>

        <div>
          {programData?.slice(0, visibleItems).map((el: any, index: any) => (
            <Link key={el._id} href={`/affiliate-network/${el._id}`}>
              <div className=" flex flex-col justify-between border-b px-1 py-5 hover:bg-black/10 md:flex-row lg:px-3">
                <div className="flex flex-col space-x-6 md:basis-11/12 md:flex-row">
                  <div className="pl-5 lg:basis-1/12 lg:pl-0">
                    <Image
                      // src={el.image}
                      src="/Home/affiliate_network/1.svg"
                      width={95}
                      height={95}
                      alt="start_network"
                      className=""
                    />
                  </div>
                  <div className="md:basis-11/12">
                    <h2 className="font-bold">{el.title}</h2>
                    <p>{el.program_type}</p>
                    <div className="flex items-center space-x-8">
                      <div className="flex ">
                        <AiFillStar className="text-[#FFAB2D]" />
                        <AiFillStar className="text-[#FFAB2D]" />
                        <AiFillStar className="text-[#FFAB2D]" />
                        <AiFillStar className="text-[#FFAB2D]" />
                        <AiFillStar className="text-[#FFAB2D]" />
                      </div>
                      <div className="flex items-center font-bold">
                        {/* <p>{el.ratings}</p> */}
                        <p>4.8</p>
                        {/* <p>({el.totalReviews}) Reviews</p> */}
                        <p>117 Reviews</p>
                      </div>
                    </div>
                    {/* <p className="py-3">{el.description}</p> */}
                    <p className="py-3">
                      TopClientOffer Is The leading performance marketing
                      Company. TCO is one of the worlds best CPA network. TCO is
                      one of the worlds best CPA network.
                    </p>
                    <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-8  lg:space-y-0">
                      {/* <div className="hidden lg:flex">
                        {el.tag.slice(0, 3).map((item: any, index: any) => (
                          <div
                            key={index}
                            className="mr-5 flex rounded-lg bg-[#DFDFDF] px-2 ">
                            <button className="capitalize">{item}</button>
                          </div>
                        ))}
                      </div> */}
                      {/* For mobile  */}
                      {/* <div className="flex lg:hidden">
                        {el.tag.slice(0, 3).map((item: any, index: any) => (
                          <div
                            key={index}
                            className="mr-1 flex rounded-lg bg-[#DFDFDF] px-2 ">
                            <button className="capitalize">{item}</button>
                          </div>
                        ))}
                      </div> */}
                      <div
                        key={index}
                        className="mr-5 flex rounded-lg bg-[#DFDFDF] px-2 ">
                        <button className="capitalize">{el.tag}</button>
                      </div>
                      <div className="flex space-x-8 font-bold">
                        <p>{el.referral_commission} Offers</p>
                        <p>Tracking</p>
                        <p>7/15/30</p>
                        {/* <p>{el.process}</p>
                        <p>{el.net}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-5 mt-5 lg:ml-0">
                  <Link
                    href={el.network_url}
                    className="rounded-lg bg-[#4E93D3] px-4 py-3 font-bold text-white md:mr-5 lg:mr-1">
                    <button className="">Join Now</button>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        {visibleItems < programData.length && (
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

export default AffiliateNetworks;
