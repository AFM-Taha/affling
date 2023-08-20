import Image from 'next/image';
import signUpPageHeroPhoto  from '../../../assets/temp/SIgnUpPageHeroPhoto/SignUpPageHero.png'
import Link from 'next/link';
const SignUpPageHero = () => {
  return (
    <div className="grid grid-cols-1 gap-5 pt-10 lg:grid-cols-3 lg:pt-5">
      {/* left side  */}
      <div className=" h-44 border bg-zinc-300"></div>
      {/* right side  */}
      <Link href="/" className=" h-44 border  lg:col-span-2">
        <Image
          src={signUpPageHeroPhoto}
          width={0}
          height={0}
          className='w-full h-full'
          alt=""
        />
      </Link>
    </div>
  );
};

export default SignUpPageHero;
