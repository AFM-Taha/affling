import Image from 'next/image';
import signUpPageHeroPhoto from '../../../assets/temp/SIgnUpPageHeroPhoto/SignUpPageHero.png';
import Link from 'next/link';
const SignUpPageHero = () => {
  return (
    <div className="grid grid-cols-1 gap-5 pt-10 lg:grid-cols-3 lg:pt-5">
      {/* left side  */}
      <div className="col-span-1 h-full min-h-[200px] w-full border bg-zinc-300"></div>
      {/* right side  */}
      <Link href="#" className="col-span-2 mx-auto border">
        <Image
          src={signUpPageHeroPhoto}
          className="xl:h-[328.24px] xl:w-[872.96px]"
          alt=""
        />
      </Link>
    </div>
  );
};

export default SignUpPageHero;
