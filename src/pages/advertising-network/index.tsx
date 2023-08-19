import SignUpForm from '@/components/SignUpForm/SignUpForm';
import SignUpPageHero from '@/components/common/hero/SignUpPageHero';
import React from 'react';

const AdvertisingNetwork: React.FC = () => {
  return (
    <div className="min-h-screen px-5 lg:px-[140px] mx-auto">
      {/* advertising-network add section  */}
      <div>
        <SignUpPageHero />
      </div>
{/* signUp From  */}
      <div className='max-w-screen-md mr-auto mt-12'>
      <SignUpForm />
      </div>

    </div>
  );
};

export default AdvertisingNetwork;
