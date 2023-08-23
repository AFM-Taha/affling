import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import MenuBar from './MenuBar';
import SearchBar from './SearchBar';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import ButtonWithDropDown from '../Button/ButtonWithDropDown';

export default function NavBar() {
  const [open, setToggle] = useState(false);
  return (
    <>
      <nav className="hidden h-[183px] lg:block">
        <div className="my-3  flex items-center justify-between gap-2 lg:pl-[87px]">
          <div className="relative ml-4 h-20 w-12 lg:h-[131px] lg:w-[116px]">
            <Link href="/">
              <Image layout="fill" src="/affling-logo.svg" alt="Affling Logo" />
            </Link>
          </div>
          <div className="hidden w-full max-w-4xl sm:block">
            <SearchBar />
          </div>
          {/* <button className="mr-8 rounded-[20px] bg-gradient-to-r from-[#217CD9] via-[#218fd9e8] to-[#21C1D9] px-4 py-2 font-bold text-white  lg:text-2xl">
            Sign Up
          </button> */}
          <div className="mr-8 rounded-[20px] bg-gradient-to-r from-[#217CD9] via-[#218fd9e8] to-[#21C1D9] px-4 py-2 font-bold text-white  lg:text-2xl">
            <ButtonWithDropDown
              label="Sign Up"
              menuHeading="Sign up for"
              menuItems={[
                'Affiliate Network',
                'Affiliate Program',
                'Advertising Networks',
                'Tracking Software',
                'Marketing Spy Tools',
              ]}
            />
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#217CD9] via-[#218fd9e8] to-[#21C1D9] py-2 font-bold text-white">
          <MenuBar />
        </div>
        <div className="w-full max-w-4xl py-1 sm:hidden">
          <SearchBar />
        </div>
      </nav>

      {/* For mobile  menu*/}
      <div className="mx-2 my-3 lg:hidden">
        <div className="flex items-center justify-between">
          <div className="flex space-x-1">
            <AiOutlineMenu
              className="cursor-pointer pt-3 text-4xl"
              onClick={() => setToggle(true)}
            />

            <Image
              width={55}
              height={45}
              src="/affling-logo.svg"
              alt="Affling Logo"
            />
          </div>
          {/* <button className="mr-3 rounded-[20px] bg-gradient-to-r from-[#217CD9] via-[#218fd9e8] to-[#21C1D9] px-4 py-2 font-bold text-white  lg:text-2xl">
            Sign Up
          </button> */}
          <div className="mr-3 rounded-[20px] bg-gradient-to-r from-[#217CD9] via-[#218fd9e8] to-[#21C1D9] px-4 py-2 font-bold text-white  lg:text-2xl">
            <ButtonWithDropDown
              label="Sign Up"
              menuHeading="Sign up for"
              menuItems={[
                'Affiliate Network',
                'Affiliate Program',
                'Advertising Networks',
                'Tracking Software',
                'Marketing Spy Tools',
              ]}
            />
          </div>
        </div>
        <div className="mt-5">
          <SearchBar />
        </div>
      </div>

      <MobileMenu open={open} setToggle={setToggle} />
    </>
  );
}
