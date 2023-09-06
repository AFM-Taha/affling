import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import SeeMore from '../common/Button/SeeMore';
// import { advertisingNetworksData } from '@/assets/static-data/homepage/advertisingNetworksData';



const AdvertisingNetworks = ({ networkData }: any) => {
  // console.log('networkData', networkData);
  return (
    <div>
      <div className="customShadow">
        <div className="bg-[#E9F3F2] px-6 py-3">
          <h2 className="text-[26px] font-bold ">Advertising Network</h2>
        </div>

        <div>
          {networkData?.slice(0, 4).map((el: any, index: any) => (
            <div
              key={index}
              className=" flex flex-col justify-between border-b px-1 py-5 md:flex-row lg:px-3">
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
                    <div className="flex items-center font-bold">
                      {/* <p>{el.ratings}</p> */}
                      <p>4.8</p>
                      {/* <p>({el.totalReviews}) Reviews</p> */}
                      <p>117 Reviews</p>
                    </div>
                  </div>
                  {/* <p className="py-3">{el.description}</p> */}
                  <p className="py-3">
                    TopClientOffer Is The leading performance marketing Company.
                    TCO is one of the worlds best CPA network.
                  </p>
                  <div className="flex flex-col font-bold lg:flex-row lg:space-x-7">
                    <div className="flex flex-col lg:flex-row lg:space-x-5">
                      <p className="flex font-bold">
                        Min Deposit : ${el.minimum_payment}
                      </p>
                      <div className="flex">
                        <p>Payment : </p>
                        <div key={index} className="px-1">
                          <p className="capitalize">{el.payment_method}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <p>Cost Model :</p>
                      <div key={index} className="px-1">
                        <button className="capitalize">
                          {el.payment_frequency}
                        </button>
                      </div>
                    </div>
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



