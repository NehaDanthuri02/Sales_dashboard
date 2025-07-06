import Title from '@/components/atoms/Title';
import SalesChart from '@/components/organisms/SalesChart';

export default function DashboardPage() {
  return (
    <main className="p-6">
      <Title text="Sales Dashboard (2022–2024)" />
      <SalesChart />
    </main>
  );
}
