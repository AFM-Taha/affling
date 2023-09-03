import SignUpFormMarketingSpyTools from '@/components/SignUpForm/SignUpFormMarketingSpyTools';
import SignUpPageHero from '@/components/common/hero/SignUpPageHero';

export default function MarketingSpyTools() {
  return (
    <div className="mx-auto min-h-screen px-5 lg:px-[140px]">
      {/* advertising-network add section  */}
      <div>
        <SignUpPageHero />
      </div>
      {/* signUp From  */}
      <div className="mr-auto mt-12 max-w-screen-md">
        <SignUpFormMarketingSpyTools />
      </div>
    </div>
  );
}
