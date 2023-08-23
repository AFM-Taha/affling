
import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import SeeMore from '../common/Button/SeeMore';
import { advertisingProgramData } from '@/assets/static-data/homepage/advertisingProgramData';

const AdvertisingPrograms = () => {
  return (
    <div>
      <div className="customShadow">
        <div className="bg-[#E9F3F2] px-6 py-3">
          <h2 className="text-[26px] font-bold ">Advertising Program</h2>
        </div>

        <div>
          {advertisingProgramData.map((el, index) => (
            <div
              key={index}
              className=" flex flex-col justify-between border-b px-1 py-5 lg:flex-row lg:px-3">
              <div className="flex flex-col space-x-6 lg:basis-11/12 lg:flex-row">
                <div className="pl-5 lg:basis-2/12 lg:pl-0">
                  <Image
                    src={el.image}
                    width={172}
                    height={172}
                    alt="advertise_program"
                    className=""
                  />
                </div>
                <div className="lg:basis-11/12">
                  <h2 className="mt-3 font-bold lg:mt-0">{el.name}</h2>
                  <p>Advertising Program</p>
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
                  <div className="flex flex-row font-bold lg:space-x-7">
                    <p>Comission Type</p>
                    <p>/ Tracking</p>
                    <p>/ Monthly</p>
                  </div>
                </div>
              </div>
              <div className="ml-5 mt-5 lg:ml-0">
                <Link
                  href="/"
                  className="rounded-lg bg-[#4E93D3] px-4 py-3 font-bold text-white">
                  <button>Join Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link href="advertising-program" className="my-12">
          <SeeMore />
        </Link>
      </div>
    </div>
  );
};

export default AdvertisingPrograms;
