import Head from 'next/head';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export default function AdminLoginLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Admin Login</title>
        <style>{`body { 
          background-color: #2A3447; 
        }`}</style>
      </Head>
      <div>{children}</div>;
    </>
  );
}
