import LinkCircleFill from '@/assets/icons/LinkCircleFill';
import MicFillCircle from '@/assets/icons/MicFillCircle';
import NetworkIcon from '@/assets/icons/NetworkIcon';
import RoboticHand from '@/assets/icons/RoboticHand';
import DashboardCard from '@/components/admin/DashboardCard';
import DashboardSmallCard from '@/components/admin/DashboardSmallCard';
import Mic from '@/assets/icons/Mic';

export default function Dashboard() {
  return (
    <div className="p-5 text-[#0F151C]">
      <div>
        <div className="mb-6">
          <DashboardCard
            progress={30}
            title={'Total Balance'}
            quantity={'$245,000'}
            time={'30 days '}
          />
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          <DashboardCard
            progress={74}
            title={'Total Premium Customer'}
            quantity={'300+'}
            time={'30 days'}
          />
          <DashboardCard
            progress={58}
            title={'Sponsor Customer'}
            quantity={'300+'}
            time={'30 days'}
          />
        </div>
      </div>

      {/* ----- Small Cards ----- */}
      <div className="mt-6 grid grid-cols-4 gap-6">
        <DashboardSmallCard
          bg={'#f5bc00'}
          title={'Affiliate Network'}
          quantity={'12'}
          icon={<NetworkIcon />}
        />
        <DashboardSmallCard
          bg={'#3dd6b2'}
          title={'Affiliate Program'}
          quantity={'20'}
          icon={<LinkCircleFill />}
        />
        <DashboardSmallCard
          bg={'#ddbaff'}
          title={'Advertising Network'}
          quantity={'25'}
          icon={<MicFillCircle />}
        />
        <DashboardSmallCard
          bg={'#f55376'}
          title={'Tracking Software'}
          quantity={'30'}
          icon={<RoboticHand />}
        />
        <DashboardSmallCard
          bg={'#3dd9eb'}
          title={'Marketing Spy Tools'}
          quantity={'35'}
          icon={<Mic />}
        />
      </div>
    </div>
  );
}
