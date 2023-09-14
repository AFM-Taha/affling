import { AffiliateDataType } from '@/assets/static-data/dashboard/fakedata';
import React, { useState } from 'react';
import { AiOutlineFilter, AiOutlineMail } from 'react-icons/ai';
import { BiSolidOffer, BiTime } from 'react-icons/bi';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import { HiPencilAlt } from 'react-icons/hi';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { IoMdContact } from 'react-icons/io';
import { MdPayments } from 'react-icons/md';

const MarketingSpyToolsAdmin: React.FC = ({ networkData }: any) => {
  console.log('firstdsds', networkData);

  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [sortBySerialNoAsc, setSortBySerialNoAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Toggle filter dropdown
  const handleStatusDropdownClick = () => {
    setStatusDropdownOpen(!statusDropdownOpen);
  };

  // Apply status filter
  const handleStatusFilter = (status: string) => {
    setSelectedStatus(status === selectedStatus ? null : status);
    setStatusDropdownOpen(false);
    setCurrentPage(1);
  };

  // Reset status filter
  const resetStatusFilter = () => {
    setSelectedStatus(null);
    setCurrentPage(1);
  };

  // Handle sorting by serial number
  const handleSerialNoClick = () => {
    setSortBySerialNoAsc((prev) => !prev);
    setCurrentPage(1);
  };

  // Filter data based on selected status
  const filteredData: AffiliateDataType[] = selectedStatus
    ? networkData.filter((el: any) => el.status === selectedStatus)
    : networkData;

  // Sort filtered data by index
  const sortedData = filteredData.slice().sort((a, b) => {
    const indexA = networkData.indexOf(a);
    const indexB = networkData.indexOf(b);

    if (sortBySerialNoAsc) {
      return indexA - indexB;
    } else {
      return indexB - indexA;
    }
  });

  // Calculate total number of pages
  const totalItems = sortedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate pagination buttons
  const getPaginationButtons = () => {
    const visiblePageCount = 4;
    const buttons = [];
    if (totalPages <= visiblePageCount) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          buttons.push(i);
        }
        buttons.push('...');
        buttons.push(totalPages);
      } else if (currentPage > totalPages - 3) {
        buttons.push(1);
        buttons.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          buttons.push(i);
        }
      } else {
        buttons.push(1);
        buttons.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          buttons.push(i);
        }
        buttons.push('...');
        buttons.push(totalPages);
      }
    }
    return buttons;
  };

  const paginationButtons = getPaginationButtons();

  // Calculate data range
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = sortedData.slice(startIndex, endIndex);

  // Maximum duration value for 100% width
  const maximumDuration = 30;

  // Calculate counts for each status
  const activeCount = networkData.filter(
    (el: any) => el.status === 'Active'
  ).length;
  const sponsorCount = networkData.filter(
    (el: any) => el.status === 'Sponsor'
  ).length;
  const premiumSponsorCount = networkData.filter(
    (el: any) => el.status === 'Premium Sponsor'
  ).length;

  return (
    <div className="mb-12 text-white">
      {/* Content  */}
      <div className="px-3 py-4">
        <div className="flex  items-center space-x-4 text-sm font-medium lg:text-base">
          <h4>Affiliates</h4>
          <p className="flex items-center space-x-1">
            <GoDotFill className="text-[#12DE33]" /> <span>{activeCount}</span>{' '}
            <span>Active</span>
          </p>
          <p className="flex items-center space-x-1">
            <GoDotFill className="text-[#1AA5CF]" />
            <span>{sponsorCount}</span>
            <span>Sponsor</span>
          </p>
          <p className="flex items-center space-x-1">
            <GoDotFill className="text-[#F4AF48]" />{' '}
            <span>{premiumSponsorCount}</span>
            <span>Premium Sponsor</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-300">
          {/* Table header */}
          <thead className="relative bg-gray-800">
            <tr className="">
              <th
                className="relative  cursor-pointer  px-4 py-2 text-center text-sm lg:table-cell lg:text-base xl:py-1.5 large:py-5"
                onClick={handleStatusDropdownClick}>
                <div className="flex items-center space-x-1">
                  <span>Status</span> <AiOutlineFilter className="text-xl" />
                </div>
                {statusDropdownOpen && (
                  <div className="absolute left-0 top-[calc(100%+1px)] z-50  w-[200px] rounded border bg-gray-600 shadow-lg">
                    <div className="flex flex-col space-y-3 px-2 py-3 text-left">
                      <p
                        className={`flex items-center space-x-3 ${
                          selectedStatus === 'Active' && 'font-semibold'
                        }`}
                        onClick={() => handleStatusFilter('Active')}>
                        <div className="rounded-md border p-0.5">
                          <GoDotFill className="text-[#12DE33]" />
                        </div>
                        <span className="font-normal">Active</span>
                      </p>
                      <p
                        className={`flex items-center space-x-3 ${
                          selectedStatus === 'Sponsor' && 'font-semibold'
                        }`}
                        onClick={() => handleStatusFilter('Sponsor')}>
                        <div className="rounded-md border p-0.5">
                          <GoDotFill className="text-[#1AA5CF]" />
                        </div>
                        <span className="font-normal">Sponsor</span>
                      </p>
                      <p
                        className={`flex items-center space-x-3 ${
                          selectedStatus === 'Premium Sponsor' &&
                          'font-semibold'
                        }`}
                        onClick={() => handleStatusFilter('Premium Sponsor')}>
                        <div className="rounded-md border p-0.5">
                          <GoDotFill className="text-[#F4AF48]" />
                        </div>
                        <span className="font-normal">Premium Sponsor</span>
                      </p>
                      <hr />
                      <div className="flex items-center justify-between px-2">
                        <p onClick={resetStatusFilter}>Reset</p>
                        <button className=" rounded-lg bg-[#1AA5CF] px-4 py-1">
                          Ok
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </th>
              <th
                className="relative cursor-pointer px-4 py-2 text-center text-sm lg:table-cell lg:text-base xl:py-1.5 large:py-5"
                onClick={handleSerialNoClick}>
                Serial No
                {sortBySerialNoAsc ? (
                  <span className="ml-1">&#9650;</span>
                ) : (
                  <span className="ml-1">&#9660;</span>
                )}
              </th>
              <th className=" px-4 py-2 text-center text-sm lg:table-cell lg:text-base xl:py-1.5 large:py-5">
                <div className="flex items-center space-x-1">
                  <span>Created</span>
                  <HiPencilAlt className="text-lg" />
                </div>
              </th>
              <th className="px-4 py-2 text-center text-sm lg:table-cell lg:text-base xl:py-1.5 large:py-5">
                <div className="flex items-center space-x-1">
                  <span>Company Name</span>
                  <HiOutlineHomeModern className="text-lg" />
                </div>
              </th>
              <th className="px-4 py-2 text-center text-sm lg:table-cell lg:text-base xl:py-1.5 large:py-5">
                <div className="flex items-center space-x-1">
                  <span>No of Offers </span>
                  <BiSolidOffer className="text-lg" />
                </div>
              </th>
              <th className="px-4 py-2 text-center text-sm lg:table-cell lg:text-base xl:py-1.5 large:py-5">
                <div className="flex items-center space-x-1">
                  <span>Email Address</span>
                  <AiOutlineMail className="text-lg" />
                </div>
              </th>
              <th className="px-4 py-2 text-center text-sm lg:table-cell lg:text-base xl:py-1.5 large:py-5">
                <div className="flex items-center space-x-1">
                  <span>Manager</span>
                  <IoMdContact className="text-lg" />
                </div>
              </th>
              <th className="px-4 py-2 text-center text-sm lg:table-cell lg:text-base xl:py-1.5 large:py-5">
                <div className="flex items-center space-x-1">
                  <span>IM Skype</span>
                  <BsFillTelephonePlusFill className="text-lg" />
                </div>
              </th>
              <th className="px-4 py-2 text-center text-sm lg:table-cell lg:text-base xl:py-1.5 large:py-5">
                <div className="flex items-center space-x-1">
                  <span>Payment</span>
                  <MdPayments className="text-lg" />
                </div>
              </th>
              <th className="px-4 py-2 text-center text-sm lg:table-cell lg:text-base xl:py-1.5 large:py-5">
                <div className="flex items-center space-x-1">
                  <span>Duration</span>
                  <BiTime className="text-lg" />
                </div>
              </th>
            </tr>
          </thead>
          {/* Table content */}
          <tbody className="divide-y divide-gray-300">
            {paginatedData.map((el, index) => (
              <tr key={index}>
                <td className="px-4 py-4 text-center">
                  {el.status === 'Active' ? (
                    <GoDotFill className="ml-3 flex text-xl text-[#12DE33]" />
                  ) : el.status === 'Sponsor' ? (
                    <GoDotFill className="ml-3 flex text-xl text-[#1AA5CF]" />
                  ) : (
                    <GoDotFill className="ml-3 flex text-xl text-[#F4AF48]" />
                  )}
                </td>
                <td className="px-4 py-4 text-center">
                  {sortBySerialNoAsc ? (
                    <span>{index + 1}</span>
                  ) : (
                    <span>{paginatedData.length - index}</span>
                  )}
                </td>
                <td className="px-4 py-4 text-center">
                  {el.createdAt.slice(0, 10)}
                </td>
                <td className="px-4 py-4 text-center">{el.title}</td>
                <td className="px-4 py-4 text-center">
                  {el.referral_commission}
                </td>
                <td className="px-4 py-4 text-center">{el.company_email}</td>
                <td className="px-4 py-4 text-center">
                  {el.publishers_contact.slice(0, 1).map((el, index) => (
                    <div key={index}>{el.name}</div>
                  ))}
                </td>
                <td className="px-4 py-4 text-center">{el.skype}</td>
                <td className="px-4 py-4 text-center">{el.payment_method}</td>
                {/* Dynamically set width based on duration */}
                <td className="flex w-[250px]  flex-col px-4 py-4  text-start">
                  <div>
                    <p>30 Days</p>
                  </div>
                  <div className="relative flex items-center">
                    <div
                      className="relative h-3 w-full overflow-hidden rounded-l-full bg-[#f1f1f1]"
                      style={{
                        width: `${(30 / maximumDuration) * 100}%`,
                      }}>
                      <div className="absolute left-0 top-0 h-full "></div>
                    </div>
                    <p className=" ml-[-3px] cursor-pointer rounded-full border bg-[#f1f1f1] px-2 py-1 text-black">
                      {/* {el.duration} */}30
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="mt-4 flex px-5">
        <div className="rounded-lg bg-gray-800 px-2 py-1">
          <span className="mx-2 text-gray-300">
            Items:
            <select
              className="ml-1 rounded bg-gray-800 px-2 py-1 text-white"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}>
              <option value="5">5 / Page</option>
              <option value="10">10 / Page</option>
              <option value="15">15 / Page</option>
              <option value="20">20 / Page</option>
            </select>
          </span>
          {paginationButtons.map((button, index) => (
            <span
              key={index}
              className={`mx-1 cursor-pointer rounded px-2 py-1 ${
                button === currentPage
                  ? 'bg-gray-300 text-gray-800 '
                  : 'text-white'
              }`}
              onClick={() => {
                if (typeof button === 'number') {
                  setCurrentPage(button);
                }
              }}>
              {button}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingSpyToolsAdmin;

// Fetch Data
export const getStaticProps = async () => {
  const authorizationToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTAzMTBiNTNhZDRkZDBlNmEwNmY0ODciLCJpYXQiOjE2OTQ2OTk3Mzl9.X52uXckKKVdMhwjAXwR8oi_mOgAnFG5d254W4Ckvm9k';

  const res = await fetch(
    'https://lionfish-app-qfe6m.ondigitalocean.app/v1/admin/marketing-spy-tools',
    {
      method: 'GET',
      headers: {
        Authorization: authorizationToken,
        'Content-Type': 'application/json',
      },
    }
  );

  if (res.status === 401) {
    console.error('Unauthorized access. Please check your token.');
    return {
      props: {
        networkData: [],
      },
    };
  }

  const data = await res.json();
  console.log(data);

  return {
    props: {
      networkData: data.offers || [],
    },
  };
};
