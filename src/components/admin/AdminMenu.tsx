import { useRouter } from 'next/router';
import { convertToSlug } from '../common/Button/ButtonWithDropDown';
import { useActiveSectionContext } from '@/context/active-section-context';
import { MouseEvent, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { programTypes } from '@/assets/static-data/programTypes';
import { GrClose } from 'react-icons/gr';
import { MdOutlineHelpOutline } from 'react-icons/md';
import { TbLogout2 } from 'react-icons/tb';
import Cookies from 'js-cookie';
import getToken from '@/hooks/useToken';

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function AdminMenu({ isOpen, setIsOpen }: Props) {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  const router = useRouter();

  
  useEffect(() => {
    setIsOpen(false);
      }, [router, setIsOpen]);
  
  const handleOuterClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains('overlay')) {
      setIsOpen(!isOpen);
    }
  };
  
  return (
    <div
      onClick={handleOuterClick}
      className={`overlay fixed left-0 top-0 z-[999] min-h-screen w-full duration-500  ${
        isOpen ? 'bg-black/75' : 'pointer-events-none bg-transparent'
      }`}>
      <div
        className={`absolute h-screen w-[75%] max-w-[375px] bg-[#2a3447] pb-20 transition-[left] ${
          isOpen ? 'left-0' : '-left-full'
        }`}>
        <div className="item-center flex flex-col justify-start">
          <div className="flex flex-col justify-between p-2 shadow-sm">
            <div className="flex items-center justify-evenly gap-3 bg-[#1aa5cf26] py-4 pl-4 text-xl text-[#1AA5CF]">
              <Link href={'/admin/dashboard'}>
                <div className="flex items-center justify-start gap-2">
                  <Image
                    width={20}
                    height={20}
                    src="/star-part-of-logo.svg"
                    alt="Affling Logo"
                  />
                  <h1 className="font-medium">Dashboard</h1>
                </div>
              </Link>
              <button onClick={() => setIsOpen(false)}>
                <GrClose size={20} className="text-white" />
              </button>
            </div>

            <div className="font-lg my-3 flex flex-col space-y-3 px-3 py-3 font-medium">
              <ul className="ml-5 font-gordita text-[#808291]">
                {programTypes.map((programType) => {
                  return (
                    <Link
                      onClick={() => setActiveSection(programType)}
                      key={programType}
                      href={convertToSlug(programType)}
                      className={`mt-5 block ${
                        activeSection === programType
                          ? 'text-lg font-medium text-gray-300 duration-200'
                          : ''
                      }`}>
                      <li>{programType}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Link
                href={'/admin/login'}
                onClick={() => {
                  Cookies.remove('userToken');
                }}
                className="flex w-11/12 items-center justify-center gap-2 rounded-lg bg-red-500 py-1 font-medium text-white hover:bg-red-600">
                <TbLogout2 />
                Log out
              </Link>
              <Link
                href="/help"
                className="flex items-center justify-center gap-4 text-[#808291]">
                <MdOutlineHelpOutline size={24} color="#808291" />
                <div className="text-lg">Help & Center</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
