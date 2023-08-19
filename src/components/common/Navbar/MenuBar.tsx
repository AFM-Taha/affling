import Link from 'next/link';

export default function MenuBar() {
  return (
    <div>
      <ul className="flex justify-evenly gap-8 overflow-x-scroll sm:overflow-auto">
        <Link className="min-w-fit font-medium" href={'#'}>
          All Categories
        </Link>
        <Link className="min-w-fit font-medium" href={'#'}>
          Home
        </Link>
        <Link className="min-w-fit font-medium" href={'#'}>
          Offers
        </Link>
        <Link className="min-w-fit font-medium" href={'#'}>
          Marketing Tools
        </Link>
        <Link className="min-w-fit font-medium" href={'#'}>
          Tag
        </Link>
        <Link className="min-w-fit font-medium" href={'#'}>
          News Feed
        </Link>
        <Link className="min-w-fit font-medium" href={'#'}>
          Review
        </Link>
        <Link className="min-w-fit font-medium" href={'#'}>
          FAQ
        </Link>
        <Link className="min-w-fit font-medium" href={'#'}>
          Quick Links
        </Link>
      </ul>
    </div>
  );
}
