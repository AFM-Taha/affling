import Link from 'next/link';
import { FooterLink } from '../typography/links';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="  bg-[#091627] text-white">
      <div
        className="h-[332px] items-end justify-around px-[50px]
 py-[55px] leading-8  md:flex ">
        <div className="w-[353px]">
          The TOP IT LTD has the same motives to make a skilled generation of
          information and technology in Bangladesh and worldwide.
        </div>
        <div className="leading-10">
          <FooterLink link={'/'}>Quick Links</FooterLink>
          <FooterLink link={'/'}>Home</FooterLink>
          <FooterLink link={'/'}>Offer</FooterLink>
          <FooterLink link={'/'}>Review</FooterLink>
          <FooterLink link={'/privacy'}>Privacy Policy</FooterLink>
        </div>
        <div>
          <FooterLink link={'/'}>Affiliate Network</FooterLink>
          <FooterLink link={'/'}>Advertising Network</FooterLink>
          <FooterLink link={'/'}>Advertising Program</FooterLink>
          <FooterLink link={'/'}>Top Offers</FooterLink>
          <FooterLink link={'/'}>Tracking Software</FooterLink>
          <FooterLink link={'/'}>Marketing Tools</FooterLink>
        </div>
        <div>
          <FooterLink link={'/'}>News Feed</FooterLink>
          <FooterLink link={'/faq'}>FAQ</FooterLink>
          <FooterLink link={'/'}>Tag</FooterLink>
          <FooterLink link={'/'}>Tracking Software</FooterLink>
          <FooterLink link={'/'}>Marketing Tools</FooterLink>
          <FooterLink link={'/condition'}>Terms & Condition</FooterLink>
        </div>
        <div className="gap-15 flex flex-col">
          <FooterLink link={'/'}>Contact Us</FooterLink>
          <div className="mb-[20px] mt-[20px] flex">
            <input
              className="w-[189px] rounded-l-3xl pl-5 text-base text-gray-600"
              placeholder="Enter Your Email..."
              type="text"
            />
            <button
              className="h-10 w-32 flex-shrink-0 rounded-r-3xl bg-gradient-to-r from-blue-500
via-blue-400 to-cyan-500 text-lg leading-7">
              Subscribed
            </button>
          </div>
          <FooterLink link={'/'}>GET CONNECTED</FooterLink>
          <div className="mt-4  flex  items-center gap-4">
            <Link href={'/'}>
              <Image height={32} width={32} src={'/f-f.svg'} alt=""></Image>
            </Link>
            <Link href={'/'}>
              <Image height={32} width={32} src={'/f-t.svg'} alt=""></Image>
            </Link>
            <Link href={'/'}>
              <Image height={32} width={32} src={'/f-l.svg'} alt=""></Image>
            </Link>
            <Link href={'/'}>
              <Image height={32} width={32} src={'/f-ta.svg'} alt=""></Image>
            </Link>
            <Link href={'/'}>
              <Image height={32} width={32} src={'/f-y.svg'} alt=""></Image>
            </Link>
            <Link href={'/'}>
              <Image height={32} width={32} src={'/f-s.svg'} alt=""></Image>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
