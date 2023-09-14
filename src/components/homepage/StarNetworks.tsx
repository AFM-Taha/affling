// import { StartNetworksData } from "@/assets/static-data/homepage/starNetworks";
import Image from 'next/image';
import { useState } from 'react';

const StarNetworks = ({ starts }: any) => {
  const [visibleItems, setVisibleItems] = useState(10);

  const handleSeeMoreClick = () => {
    setVisibleItems(visibleItems + 4);
  };
  return (
    <div className="pb-16">
      <div className="customShadow ">
        <div className="bg-[#E9F3F2]">
          <h3 className="py-3 pl-6 font-bold">Star Networks</h3>
        </div>
        <div className=" ">
          {starts?.slice(0, visibleItems).map((el: any, index: any) => (
            <div key={index} className="">
              <div className="flex w-[357px] flex-row items-center justify-between space-y-5 border-b px-5  pb-4 ">
                <div className="flex items-center justify-center pt-5">
                  <Image
                    src="/Home/star_networks/1.svg"
                    width={55}
                    height={55}
                    alt="start_network"
                    className=""
                  />
                  {/* <Image
                    src={el.image}
                    width={55}
                    height={55}
                    alt="start_network"
                    className=""
                  /> */}
                </div>
                <div className="">
                  <div className="flex items-center justify-between space-x-5 pb-2  ">
                    <p className="text-sm font-bold lg:text-base">{el.title}</p>
                    <span className="rounded-xl border border-[#E7B228] px-1 text-sm">
                      {' '}
                      1000+{' '}
                    </span>
                  </div>

                  <div className="flex items-center justify-between space-x-5">
                    <div>
                      <button
                        key={index}
                        className="border-1 mr-2 rounded-[10px] border bg-[#EFF8FF] px-2 text-xs lg:text-base">
                        {el.tag}
                      </button>
                      {/* Display offer categories */}
                      {/* {el.category.map((item, index) => (
                        <button
                          key={index}
                          className="border-1 mr-2 rounded-[10px] border bg-[#EFF8FF] px-2 text-xs lg:text-base">
                          {item}
                        </button>
                      ))} */}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <Image
                    src="/Home/star_networks/ratings.svg"
                    width={55}
                    height={55}
                    alt="start_network"
                    className=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          {visibleItems < starts?.length && (
            <button
              className="my-3 rounded-lg border-2 border-[Orange] px-3 py-2"
              onClick={handleSeeMoreClick}>
              See More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StarNetworks;
