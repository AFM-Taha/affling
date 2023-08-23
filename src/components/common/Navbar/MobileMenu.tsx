import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import ButtonWithDropDown from '../Button/ButtonWithDropDown';

interface MobileMenuProps {
  open: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu = ({ open, setToggle }: MobileMenuProps) => {
  const router = useRouter();

  // Close the mobile menu when the route changes
  useEffect(() => {
    setToggle(false);
  }, [router, setToggle]);

  // Handle click on the overlay to toggle the mobile menu
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains('overlay')) {
      setToggle(!open);
    }
  };

  return (
    // Overlay for the mobile menu
    <div
      onClick={handleOverlayClick}
      className={`overlay fixed left-0 top-0 z-20 h-screen w-full transition-all duration-500  ${
        open ? 'bg-black/75' : 'pointer-events-none bg-transparent'
      }`}>
      {/* Mobile menu content */}
      <div
        className={`absolute h-screen w-[75%] max-w-[375px] bg-white pb-20 transition-[left] ${
          open ? 'left-0' : '-left-full'
        }`}>
        <div className="item-center flex flex-col justify-start">
          {/* Header with logo and close button */}
          <div className="flex justify-between p-2 shadow-sm">
            <Image
              width={55}
              height={45}
              src="/affling-logo.svg"
              alt="Affling Logo"
            />
            <button onClick={() => setToggle(false)}>
              <AiOutlineCloseCircle size={28} />
            </button>
          </div>

          {/* Navigation links */}
          <div className="font-lg my-3 flex flex-col space-y-3 border-2 px-3 py-3 font-medium">
            {/* Links to various sections */}
            <div className="text-left hover:underline">
              <ButtonWithDropDown
                menuHeading="Go to"
                menuItems={[
                  'Affiliate Network',
                  'Affiliate Program',
                  'Advertising Network',
                  'Tracking Software',
                  'Marketing Spy Tools',
                ]}
                slugEndpoint="profile">
                All Categories
              </ButtonWithDropDown>
            </div>
            <Link className="hover:underline" href={'/'}>
              Home
            </Link>
            <Link className="hover:underline" href={'/offers'}>
              Offers
            </Link>
            <Link className="hover:underline" href={'/marketing-tools'}>
              Marketing Tools
            </Link>
            <Link className="hover:underline" href={'tag'}>
              Tag
            </Link>
            <Link className="hover:underline" href={'/news'}>
              News Feed
            </Link>
            <Link className="hover:underline" href={'/review'}>
              Review
            </Link>
            <Link className="hover:underline" href={'/faq'}>
              FAQ
            </Link>
            <Link className="hover:underline" href={'quick-links'}>
              Quick Links
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
