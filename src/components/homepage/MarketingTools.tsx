// import { MarketingToolsData } from "@/assets/static-data/homepage/MarketingToolsData";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

const MarketingTools = ({ marketingSpyData }: any) => {
  // console.log('marketingSpyData', marketingSpyData);
  const [visibleItems, setVisibleItems] = useState(4);

  const handleSeeMoreClick = () => {
    setVisibleItems(visibleItems + 4);
  };
  return (
    <div>
      <div className="customShadow">
        <div className="bg-[#E9F3F2] px-6 py-3">
          <h2 className="text-[26px] font-bold ">Marketing Tools</h2>
        </div>

        <div>
          {marketingSpyData
            ?.slice(0, visibleItems)
            .map((el: any, index: any) => (
              <Link
                key={index}
                href={`/marketing-spy/${el._id}`}
                className=" flex flex-col justify-between border-b px-1 py-5 md:flex-row lg:px-3">
                <div className="flex flex-col space-x-6 md:basis-11/12 md:flex-row">
                  <div className="pl-5 lg:basis-2/12 lg:pl-0">
                    <Image
                      // src={el.image}
                      src="/Home/marketingTools/1.svg"
                      width={172}
                      height={172}
                      alt="marketing-spy tool"
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
                      <div className="flex items-center space-x-2 font-bold">
                        {/* <p>{el.ratings}</p> */}
                        <p>4.8</p>
                        {/* <p>({el.totalReviews}) Reviews</p> */}
                        <p>117 Reviews</p>
                      </div>
                    </div>
                    {/* <p className="py-3">{el.description}</p> */}
                    <p className="py-3">
                      Affigate is an innovative, productivity-first SaaS
                      marketing platform that effectively drives acquisition,
                      retention and revenue for all affiliate players.
                    </p>
                    <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-8  lg:space-y-0">
                      <div className="mr-5 flex rounded-lg bg-[#DFDFDF] px-2 ">
                        <button className="capitalize">{el.tag}</button>
                      </div>
                      {/* <div className="hidden lg:flex">
                      {el.category.map((item, index) => (
                        <div
                          key={index}
                          className="mr-5 flex rounded-lg bg-[#DFDFDF] px-2 ">
                          <button className="capitalize">{item}</button>
                        </div>
                      ))}
                    </div> */}
                      {/* For mobile  */}
                      {/* <div className="flex lg:hidden">
                      {el.category.slice(0, 3).map((item, index) => (
                        <div
                          key={index}
                          className="mr-1 flex rounded-lg bg-[#DFDFDF] px-2 ">
                          <button className="capitalize">{item}</button>
                        </div>
                      ))}
                    </div> */}
                    </div>
                  </div>
                </div>
                <div className="ml-5 mt-5 lg:ml-0">
                  <Link
                    href={el.network_url}
                    className="rounded-lg bg-[#4E93D3] px-4 py-3 font-bold text-white md:mr-5 lg:mr-2">
                    <button>Join Now</button>
                  </Link>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        {visibleItems < marketingSpyData.length && (
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

export default MarketingTools