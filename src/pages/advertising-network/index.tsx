import SignUpFormAdvertisingNetwork from '@/components/SignUpForm/SignUpFormAdvertisingNetwork';
import SignUpPageHero from '@/components/common/hero/SignUpPageHero';
import React from 'react';

const AdvertisingNetwork: React.FC = () => {
  return (
    <div className="mx-auto min-h-screen px-5 lg:px-[140px]">
      {/* advertising-network add section  */}
      <div>
        <SignUpPageHero />
      </div>
      {/* signUp From  */}
      <div className="mr-auto mt-12 max-w-screen-md">
        <SignUpFormAdvertisingNetwork />
      </div>
    </div>
  );
};

export default AdvertisingNetwork;
