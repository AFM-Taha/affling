import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import SeeMore from '../common/Button/SeeMore';
import { advertisingNetworksData } from '@/assets/static-data/homepage/advertisingNetworksData';

const AdvertisingNetworks = () => {
  return (
    <div>
      <div className="customShadow">
        <div className="bg-[#E9F3F2] px-6 py-3">
          <h2 className="text-[26px] font-bold ">Advertising Network</h2>
        </div>

        <div>
          {advertisingNetworksData.map((el, index) => (
            <div
              key={index}
              className=" flex flex-col justify-between border-b px-1 py-5 md:flex-row lg:px-3">
              <div className="flex flex-col space-x-6 lg:basis-11/12 md:flex-row">
                <div className="pl-5 lg:basis-2/12 lg:pl-0">
                  <Image
                    src={el.image}
                    width={172}
                    height={172}
                    alt="advertise_network"
                    className=""
                  />
                </div>
                <div className="lg:basis-11/12">
                  <h2 className="mt-3 font-bold lg:mt-0">{el.name}</h2>
                  <p>Advertising Network</p>
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
                  <div className="flex flex-col font-bold lg:flex-row lg:space-x-7">
                    <div className="flex flex-col lg:flex-row lg:space-x-5">
                      <p className="flex font-bold">
                        Min Deposit : ${el.minDeposit}
                      </p>
                      <div className="flex">
                        <p>Payment : </p>
                        {el.payMethod.map((item, index) => (
                          <div key={index} className="px-1">
                            <p className="capitalize">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex">
                      <p>Cost Model :</p>
                      {el.CostModel.map((item, index) => (
                        <div key={index} className="px-1">
                          <button className="capitalize">{item}</button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-5 mt-5 lg:ml-0">
                <Link
                  href="/"
                  className="rounded-lg md:mr-12 lg:mr-2 bg-[#4E93D3] px-4 py-3 font-bold text-white">
                  <button>Join Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link href="advertising-network" className="my-12">
          <SeeMore />
        </Link>
      </div>
    </div>
  );
};

export default AdvertisingNetworks;
