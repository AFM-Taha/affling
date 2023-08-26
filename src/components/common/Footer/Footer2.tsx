import Image from 'next/image';
import Link from 'next/link';

const Footer2 = () => {
  return (
    <footer className=" bg-[#091627] px-4 py-12 text-white lg:px-16">
      <div className="flex flex-col space-y-8 md:flex-row md:space-x-12 lg:space-y-0">
        <div className="md:basis-3/12">
          <p className="pt-12">
            The TOP IT LTD has the same motives to make a skilled generation of
            information and technology in Bangladesh and worldwide.
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:basis-6/12 lg:space-x-12">
          <div className="flex flex-col space-y-3 pt-5 font-bold lg:pt-0">
            <Link href="/quick-links">
              <p>Quick Links</p>
            </Link>
            <Link href="/">
              <p>Home</p>
            </Link>
            <Link href="/offers">
              <p>Offer</p>
            </Link>
            <Link href="/review">
              <p>Review</p>
            </Link>
            <Link href="/policy">
              <p>Privacy Policy</p>
            </Link>
          </div>
          <div className="flex flex-col space-y-3 py-8 font-bold md:hidden lg:flex lg:py-0">
            <Link href="/advertising-network">Advertising Network</Link>
            <Link href="/affiliate-network">Affiliate Network</Link>
            <Link href="/affiliate-program">Affiliate Program</Link>
            <Link href="/tracking-software">Tracking Software</Link>
            <Link href="/marketing-spy-tools">Marketing Tools</Link>
            <Link href="/offers">Top Offers</Link>
          </div>
          <div className="flex flex-col space-y-3 font-bold md:hidden lg:flex">
            <Link href="/news">News Feed</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/tag">Tag</Link>
            <Link href="/tracking-software">Tracking Software</Link>
            <Link href="/marketing-tool">Marketing Tools</Link>
            <Link href="/condition">Terms & Condition</Link>
          </div>
        </div>
        <div className="lg:basis-3/12">
          <Link href="/" className="font-bold">
            Contact Us
          </Link>
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
          <Link href="/">GET CONNECTED</Link>
          <div className="mt-4  flex  items-center gap-4">
            <Link href="/">
              <Image height={32} width={32} src="/f-f.svg" alt=""></Image>
            </Link>
            <Link href="/">
              <Image height={32} width={32} src="/f-t.svg" alt=""></Image>
            </Link>
            <Link href="/">
              <Image height={32} width={32} src="/f-l.svg" alt=""></Image>
            </Link>
            <Link href="/">
              <Image height={32} width={32} src="/f-ta.svg" alt=""></Image>
            </Link>
            <Link href="/">
              <Image height={32} width={32} src="/f-y.svg" alt=""></Image>
            </Link>
            <Link href="/">
              <Image height={32} width={32} src="/f-s.svg" alt=""></Image>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
