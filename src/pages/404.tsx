import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="grid min-h-[50vh] place-content-center text-center">
      <h1 className="text-3xl font-semibold">This page doesn&apos;t exist</h1>
      <Link href={'/'} className="mt-4 text-xl underline">
        go to home
      </Link>
    </div>
  );
}
