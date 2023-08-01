import { FooterLink } from '../typography/Links';

const Footer = () => {
  return (
    <footer className="bg-[#091627]  text-white">
      <div className="items-end justify-around gap-5  md:flex ">
        <div>
          The TOP IT LTD has the same motives to make a skilled generation of
          information and technology in Bangladesh and worldwide.
        </div>
        <div>
          <FooterLink link={'/'}>Quick Links</FooterLink>
          <FooterLink link={'/'}>Home</FooterLink>
          <FooterLink link={'/'}>Offer</FooterLink>
          <FooterLink link={'/'}>Review</FooterLink>
          <FooterLink link={'/'}>Privacy Policy</FooterLink>
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
          <FooterLink link={'/'}>FAQ</FooterLink>
          <FooterLink link={'/'}>Tag</FooterLink>
          <FooterLink link={'/'}>Tracking Software</FooterLink>
          <FooterLink link={'/'}>Marketing Tools</FooterLink>
          <FooterLink link={'/'}>Terms & Condition</FooterLink>
        </div>
        <div>
          <FooterLink link={'/'}>Contact Us</FooterLink>
          <div className="flex">
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
          <FooterLink link={'/'}>FAQ</FooterLink>
          <div>icons</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
