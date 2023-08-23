import SignUpForm from '@/components/SignUpForm/SignUpForm';
import SignUpPageHero from '@/components/common/hero/SignUpPageHero';

export default function AffiliateProgram() {
  return (
    <div className="mx-auto min-h-screen px-5 lg:px-[140px]">
      {/* advertising-network add section  */}
      <div>
        <SignUpPageHero />
      </div>
      {/* signUp From  */}
      <div className="mr-auto mt-12 max-w-screen-md">
        <SignUpForm programType="Affiliate Program" />
      </div>
    </div>
  );
}
