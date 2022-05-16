import dynamic from 'next/dynamic';
import Quest from '../src/share/Quest';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function testPage() {
  return <Quest type={3} />;
}
