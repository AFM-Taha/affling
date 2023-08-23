import Link from 'next/link';
import ButtonWithDropDown from '../Button/ButtonWithDropDown';

export default function MenuBar() {
  return (
    <div>
      <div className="flex items-center justify-evenly gap-6 overflow-x-scroll sm:overflow-auto">
        <ButtonWithDropDown
          menuHeading="Go to"
          menuItems={[
            'Affiliate Network',
            'Affiliate Program',
            'Advertising Network',
            'Tracking Software',
            'Marketing Spy Tools',
          ]}
          slugEndpoint="profile">
          All Categories
        </ButtonWithDropDown>
        <Link className="min-w-fit font-medium hover:underline" href={'/'}>
          Home
        </Link>
        <Link
          className="min-w-fit font-medium hover:underline"
          href={'/offers'}>
          Offers
        </Link>
        <Link
          className="min-w-fit font-medium hover:underline"
          href={'/marketing-tools'}>
          Marketing Tools
        </Link>
        <Link className="min-w-fit font-medium hover:underline" href={'tag'}>
          Tag
        </Link>
        <Link className="min-w-fit font-medium hover:underline" href={'/news'}>
          News Feed
        </Link>
        <Link
          className="min-w-fit font-medium hover:underline"
          href={'/review'}>
          Review
        </Link>
        <Link className="min-w-fit font-medium hover:underline" href={'/faq'}>
          FAQ
        </Link>
        <Link
          className="min-w-fit font-medium hover:underline"
          href={'quick-links'}>
          Quick Links
        </Link>
      </div>
    </div>
  );
}
