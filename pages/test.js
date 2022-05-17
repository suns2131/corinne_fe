import TestChart from '../src/components/presentations/transaction/chart/TestChart';

export default function testPage() {
  let cnt = 0;
  const addBtn = () => {
    cnt += 1;
    return { x: cnt, y: [1000, 1005, 999, 1003] };
  };
  return <TestChart addBtn={addBtn} cnt={cnt} />;
}
