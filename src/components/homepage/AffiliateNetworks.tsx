import { AffiliateNetworksData } from '@/assets/static-data/homepage/affiliateNetworksData';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import SeeMore from '../common/Button/SeeMore';

const AffiliateNetworks = () => {
  return (
    <div>
      <div className="customShadow">
        <div className="bg-[#E9F3F2] px-6 py-3">
          <h2 className="text-[26px] font-bold ">Affiliate Network</h2>
        </div>

        <div>
          {AffiliateNetworksData.map((el, index) => (
            <div
              key={index}
              className=" flex flex-col justify-between border-b px-1 lg:px-3 py-5 md:flex-row">
              <div className="flex flex-col space-x-6 md:basis-11/12 md:flex-row">
                <div className="pl-5 lg:basis-1/12 lg:pl-0">
                  <Image
                    src={el.image}
                    width={95}
                    height={95}
                    alt="start_network"
                    className=""
                  />
                </div>
                <div className="md:basis-11/12">
                  <h2 className="font-bold">{el.name}</h2>
                  <p>Affiliate Network</p>
                  <div className="flex items-center space-x-8">
                    <div className="flex ">
                      <AiFillStar className="text-[#FFAB2D]" />
                      <AiFillStar className="text-[#FFAB2D]" />
                      <AiFillStar className="text-[#FFAB2D]" />
                      <AiFillStar className="text-[#FFAB2D]" />
                      <AiFillStar className="text-[#FFAB2D]" />
                    </div>
                    <div className="flex items-center font-bold">
                      <p>{el.ratings}</p>
                      <p>({el.totalReviews}) Reviews</p>
                    </div>
                  </div>
                  <p className="py-3">{el.description}</p>
                  <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row  lg:space-x-8">
                    <div className="hidden lg:flex">
                      {el.category.map((item, index) => (
                        <div
                          key={index}
                          className="mr-5 flex rounded-lg bg-[#DFDFDF] px-2 ">
                          <button className="capitalize">{item}</button>
                        </div>
                      ))}
                    </div>
                    {/* For mobile  */}
                    <div className="flex lg:hidden">
                      {el.category.slice(0,3).map((item, index) => (
                        <div
                          key={index}
                          className="mr-1 flex rounded-lg bg-[#DFDFDF] px-2 ">
                          <button className="capitalize">{item}</button>
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-8 font-bold">
                      <p>{el.NumOfOffers} Offers</p>
                      <p>{el.process}</p>
                      <p>{el.net}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-5 mt-5 lg:ml-0">
                <Link
                  href="/"
                  className="rounded-lg md:mr-5 lg:mr-1 bg-[#4E93D3] px-4 py-3 font-bold text-white">
                  <button className=''>Join Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link href="affiliate-network" className="my-12">
          <SeeMore />
        </Link>
      </div>
    </div>
  );
};

export default AffiliateNetworks;
