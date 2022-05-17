import dynamic from 'next/dynamic';
import MyAlarm from '../src/share/myalarm/MyAlarm';
import Quest from '../src/share/quest/Quest';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function testPage() {
  return <MyAlarm />;
}
