import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Plant Collection | Lakshmi Shanmukhi Nursery Gardens',
  description:
    'Browse our complete catalog of indoor plants, outdoor plants, and flowering varieties. Find the perfect plant for your space.',
};

export default function PlantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
