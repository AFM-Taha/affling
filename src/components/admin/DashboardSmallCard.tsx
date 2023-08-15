import { ReactNode } from 'react';

interface Props {
  title: string;
  icon: ReactNode;
  quantity: string;
}
export default function DashboardSmallCard({ title, icon, quantity }: Props) {
  return (
    <div>
      <div>{icon}</div>
      <div>{title}</div>
      <div>{quantity}</div>
    </div>
  );
}
