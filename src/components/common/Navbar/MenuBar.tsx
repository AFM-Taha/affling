import Link from 'next/link';

export default function MenuBar() {
  return (
    <div>
      <ul className="flex justify-evenly gap-8 overflow-x-scroll sm:overflow-auto">
        <Link
          className="min-w-fit font-medium hover:underline"
          href={'/categories'}>
          All Categories
        </Link>
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
      </ul>
    </div>
  );
}
