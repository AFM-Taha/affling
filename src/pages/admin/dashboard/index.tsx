import NetworkIcon from '@/assets/icons/NetworkIcon';
import DashboardCard from '@/components/admin/DashboardCard';
import DashboardSmallCard from '@/components/admin/DashboardSmallCard';

export default function Dashboard() {
  return (
    <div className="p-5 text-[#0F151C]">
      <div>
        <div className="mb-6">
          <DashboardCard
            title={'Total Balance'}
            quantity={'$245,000'}
            time={'30 days '}
          />
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          <DashboardCard
            title={'Total Premium Customer'}
            quantity={'300+'}
            time={'30 days'}
          />
          <DashboardCard
            title={'Sponsor Customer'}
            quantity={'300+'}
            time={'30 days'}
          />
        </div>
      </div>

      {/* ----- Small Cards ----- */}
      <DashboardSmallCard
        title={'Affiliate Network'}
        quantity={'12'}
        icon={<NetworkIcon />}
      />
    </div>
  );
}
