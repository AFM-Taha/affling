import Link from "next/link";
import SeeMore from "../common/Button/SeeMore";
import Image from "next/image";
import { TopOffersData } from "@/assets/static-data/homepage/TopOffersData";

const TopRatedNetworks = () => {
  return (
    <div>
      <div className="customShadow">
        <div className="bg-[#E9F3F2] px-6 py-3">
          <h2 className="text-[26px] font-bold ">Top Offers</h2>
        </div>

        <div>
          {TopOffersData.map((el, index) => (
            <div
              key={index}
              className=" flex flex-col justify-between border-b px-1 py-5 lg:flex-row lg:px-3">
              <div className="flex flex-col lg:basis-6/12 lg:flex-row">
                <div className="pl-5 pt-3 lg:basis-2/12 lg:pl-0">
                  <Image
                    src={el.image}
                    width={55}
                    height={55}
                    alt={`${el.name}`}
                    className=""
                  />
                </div>
                <div className="lg:basis-11/12 px-2 lg:px-0">
                  <h2 className="font-bold">{el.name}</h2>
                  <div className="flex py-3 space-x-3 lg:space-x-8 font-bold">
                    <p>TopClientOffer</p>
                    <p>Dating</p>
                    <p>DE</p>
                    <p className="text-[#3AA96A]">$20.00</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center space-y-8 px-3 lg:px-0 lg:space-y-0 lg:space-x-8">
                <div className=" mt-2 lg:ml-0">
                  <Link
                    href="/"
                    className="rounded-lg border border-[#4E93D3] px-4 py-3 font-bold ">
                    <button className="w-[50%] lg:w-[75%]">Active Offer</button>
                  </Link>
                </div>
                <div className=" mt-5 lg:ml-0">
                  <Link
                    href="/"
                    className="rounded-lg bg-[#4E93D3] px-3 py-3 font-bold text-white">
                    <button className="w-[50%] lg:w-[95%]">Best Converting</button>
                  </Link>
                </div>
                <div className=" mt-5 lg:ml-0 ">
                  <Link
                    href="/"
                    className="rounded-lg lg:mr-5 bg-[#4E93D3] px-4 py-3 font-bold text-white">
                    <button className="w-[50%] lg:w-[75%]">Update</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link href="top-offers" className="my-12">
          <SeeMore />
        </Link>
      </div>
    </div>
  );
}

export default TopRatedNetworks