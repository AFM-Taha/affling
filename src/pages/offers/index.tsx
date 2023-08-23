import { OffersData, OffersType } from '@/assets/static-data/offers';
import Ads from '@/components/offers/Ads';
import BestInMonth from '@/components/offers/BestInMonth';
import Menu1 from '@/components/offers/Menu1';
import Menu2 from '@/components/offers/Menu2';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';

const Offers = () => {
  // Set the number of offers to load at once
  const batchSize = 18;

  // Get all offers from static data
  const allOffers: OffersType[] = OffersData;

  // State to keep track of visible offers
  const [visibleOffers, setVisibleOffers] = useState(
    allOffers.slice(0, batchSize)
  );

  // Function to load more offers
  const handleLoadMore = () => {
    const currentVisibleCount = visibleOffers.length;
    const nextBatchEndIndex = currentVisibleCount + batchSize;
    const nextBatch = allOffers.slice(currentVisibleCount, nextBatchEndIndex);

    // Add the next batch of offers to visibleOffers
    if (nextBatch.length > 0) {
      setVisibleOffers([...visibleOffers, ...nextBatch]);
    }
  };

  return (
    <>
      <div className="px-5 lg:px-24"></div>
      <Menu1 />
      <Menu2 />

      <div className="px-5 lg:px-24">
        <div className="flex flex-col space-x-6 pb-16 pt-5 xl:flex-row">
          <div className="xl:basis-3/4">
            {/* Table to display offers */}
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Table header */}
                <thead className="bg-[#4E93D3] text-white">
                  <tr className="h-10">
                    <th className="rounded-l-[20px] text-center">
                      Offers Name
                    </th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Countries</th>
                    <th className="rounded-r-[20px] text-center">Vertical</th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="">
                  {visibleOffers.map((offer, index) => (
                    // Render each offer row
                    <tr
                      key={index}
                      className="border-b border-l border-r shadow-md ">
                      <td className="w-full py-2.5 text-left lg:w-[400px]">
                        {/* Offer details */}
                        <Link href={`/offers/${offer?._id}`}>
                          <div className="flex flex-row items-center justify-around px-10 lg:px-0">
                            <Image
                              src={offer.image}
                              width={68}
                              height={68}
                              alt="offer_image"
                              className=""
                            />
                            <div className="ml-3 lg:ml-0">
                              <div className="flex items-center space-x-2 pb-2 font-bold ">
                                <p className="text-sm lg:text-base">
                                  {offer.title}
                                </p>
                                <BsArrowRightCircle className="hidden text-[#4E93D3] lg:block" />
                              </div>
                              <div className="flex items-center justify-between space-x-5">
                                <p className="">{offer.tag}</p>
                                <div>
                                  {/* Display offer categories */}
                                  {offer.categories.map((el, index) => (
                                    <button
                                      key={index}
                                      className="border-1 mr-2 rounded-[10px] border bg-[#C6C6C6] px-2.5 text-xs lg:text-base">
                                      {el}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      {/* Offer price */}
                      <td className="text-center text-lg font-bold lg:text-base">
                        ${offer.price}
                      </td>
                      {/* Offer countries */}
                      <td className="pl-5 text-center lg:pl-0">
                        {offer.countries.map((el, index) => (
                          <span key={index} className="mr-1 lg:ml-2 ">
                            {el}
                          </span>
                        ))}
                      </td>
                      {/* Offer vertical */}
                      <td className="px-5 text-center lg:px-0">
                        {offer.vertical}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* "Load more" button */}
            {visibleOffers.length < allOffers.length && (
              <div className="py-4 text-center">
                <button
                  className="rounded-md border border-[#FFAB2D] px-4 py-2 text-[#313131] "
                  onClick={handleLoadMore}>
                  Load More
                </button>
              </div>
            )}
          </div>

          {/* Placeholder ads images */}
          <div className="hidden flex-col lg:flex xl:basis-1/4  ">
            <Ads />
            <BestInMonth />
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;

