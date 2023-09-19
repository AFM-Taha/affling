import Ads from '@/components/offers/Ads';
import BestInMonth from '@/components/offers/BestInMonth';
import Menu1 from '@/components/offers/Menu1';
import Menu2 from '@/components/offers/Menu2';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';

const Offers = () => {
  const [visibleOffers, setVisibleOffers] = useState([]);
  const [selectedSubmenu, setSelectedSubmenu] = useState<string | null>(null);
  const [visibleOfferCount, setVisibleOfferCount] = useState(10);

  const handleLoadMore = () => {
    setVisibleOfferCount((prevCount) => prevCount + 10); 
  };

  useEffect(() => {
    fetch(
      'https://lionfish-app-qfe6m.ondigitalocean.app/v1/top-it/top/vertical'
    )
      .then((response) => response.json())
      .then((data) => {
        setVisibleOffers(data.offers);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to fetch all data
  const fetchAllData = () => {
    fetch(
      'https://lionfish-app-qfe6m.ondigitalocean.app/v1/top-it/top/vertical'
    )
      .then((response) => response.json())
      .then((data) => {
        setVisibleOffers(data.offers);
      })
      .catch((error) => {
        console.error('Error fetching all data:', error);
      });
  };

  useEffect(() => {
    if (selectedSubmenu) {
      const apiUrl = `https://lionfish-app-qfe6m.ondigitalocean.app/v1/top-it/${
        selectedSubmenu.toLowerCase() === 'networks' ? 'networks' : 'vertical'
      }/search?name=${selectedSubmenu}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setVisibleOffers(data.offers);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [selectedSubmenu]);

  const handleSubmenuSelect = (submenuName: string) => {
    setSelectedSubmenu(submenuName);
  };

  return (
    <>
      <div className="px-5 lg:px-24"></div>
      <Menu1 onSubmenuSelect={handleSubmenuSelect} />
      <Menu2 onFetchAllData={fetchAllData} />

      <div className="px-5 lg:px-24">
        <div className="flex flex-col space-x-6 pb-16 pt-5 xl:flex-row">
          <div className="xl:basis-3/4">
            <div className="overflow-x-auto">
              <table className="w-full">
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
                <tbody className="">
                  {visibleOffers
                    .slice(0, visibleOfferCount)
                    .map((offer: any, index: any) => (
                      <tr
                        key={index}
                        className="border-b border-l border-r shadow-md ">
                        <td className="w-full py-2.5 text-left lg:w-[400px]">
                          <Link href={`/offers/${offer?._id}`}>
                            <div className="flex flex-row items-center justify-around px-10 lg:px-0">
                              <Image
                                src="/Offer/OfferDataImage.svg"
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
                                    <button
                                      key={index}
                                      className="border-1 mr-2 rounded-[10px] border bg-[#C6C6C6] px-2.5 text-xs lg:text-base">
                                      SOI,DOI
                                    </button>
                                    <button
                                      key={index}
                                      className="border-1 mr-2 rounded-[10px] border bg-[#C6C6C6] px-2.5 text-xs lg:text-base">
                                      SALES
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </td>
                        {offer.startup_pricing ? (
                          <td className="text-center text-lg font-bold lg:text-base">
                            ${offer.startup_pricing}
                          </td>
                        ) : (
                          <td className="text-center text-lg font-bold lg:text-base">
                            $100
                          </td>
                        )}
                        <td className="pl-5 text-center lg:pl-0">
                          <span key={index} className="mr-1 lg:ml-2 ">
                            US
                          </span>
                          <span key={index} className="mr-1 lg:ml-2 ">
                            CA
                          </span>
                          <span key={index} className="mr-1 lg:ml-2 ">
                            UK
                          </span>
                          <span key={index} className="mr-1 lg:ml-2 ">
                            IT
                          </span>
                          <span key={index} className="mr-1 lg:ml-2 ">
                            DE
                          </span>
                        </td>
                        <td className="px-5 text-center lg:px-0">Sweeptakes</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="py-4 text-center">
              {visibleOfferCount < visibleOffers.length && (
                <button
                  className="rounded-md border border-[#FFAB2D] px-4 py-2 text-[#313131]"
                  onClick={handleLoadMore}>
                  Load More
                </button>
              )}
            </div>
          </div>
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
