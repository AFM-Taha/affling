import { OffersData, OffersType } from '@/assets/static-data/offers';
import Ads from '@/components/offers/Ads';
import Image from 'next/image';
import { useState } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';

const Offers = () => {
  // Set the number of offers to load at once
  const batchSize = 10;

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
    <div className="px-24">
      <div className="flex space-x-6 pb-16 pt-5">
        <div className="basis-3/4">
          {/* Table to display offers */}
          <table className="w-full">
            {/* Table header */}
            <thead className="bg-[#4E93D3] text-white">
              <tr className="h-10">
                <th className="rounded-l-[20px] text-center">Offers Name</th>
                <th className="text-center">Price</th>
                <th className="text-center">Countries</th>
                <th className="rounded-r-[20px] text-center">Vertical</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {visibleOffers.map((offer, index) => (
                // Render each offer row
                <tr
                  key={index}
                  className="border-b border-l border-r shadow-md">
                  <td className="w-[400px] py-2.5 text-left">
                    {/* Offer details */}
                    <div className="flex flex-row items-center justify-around">
                      <Image
                        src={offer.image}
                        width={68}
                        height={68}
                        alt="offer_image"
                      />
                      <div>
                        <div className="flex items-center space-x-2 pb-2 font-bold">
                          <p>{offer.title}</p>
                          <BsArrowRightCircle className="text-[#4E93D3]" />
                        </div>
                        <div className="flex items-center justify-between space-x-5">
                          <p>{offer.tag}</p>
                          <div>
                            {/* Display offer categories */}
                            {offer.categories.map((el, index) => (
                              <button
                                key={index}
                                className="border-1 mr-2 rounded-[10px] border bg-[#C6C6C6] px-2.5">
                                {el}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  {/* Offer price */}
                  <td className="text-center">${offer.price}</td>
                  {/* Offer countries */}
                  <td className="text-center">
                    {offer.countries.map((el, index) => (
                      <span key={index} className="mr-2">
                        {el}
                      </span>
                    ))}
                  </td>
                  {/* Offer vertical */}
                  <td className="text-center">{offer.vertical}</td>
                </tr>
              ))}
            </tbody>
          </table>

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
        <div className="flex basis-1/4  justify-center">
          <Ads/>
        </div>
      </div>
    </div>
  );
};

export default Offers;
