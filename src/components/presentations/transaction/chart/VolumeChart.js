/* eslint-disable react/destructuring-assignment */
const SVG_VOLUME_WIDTH = 1600;
const SVG_VOLUME_HEIGHT = 400;
const SVG_CHART_WIDTH = 1600;
const SVG_CHART_HEIGHT = 400;

function VolumeChart(props) {
  const x0 = 150;
  const xAxisLength = SVG_VOLUME_WIDTH - x0 * 2;
  const y0 = 50;
  const yAxisLength = SVG_VOLUME_HEIGHT - y0 * 2;
  const xAxisY = y0 + yAxisLength;
  const volumeData = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < props.date.length; i++) volumeData.push([props.date[i], props.volume[i]]);

  const dataYmax = volumeData.reduce((max, [_, dataY]) => Math.max(max, dataY), -Infinity);
  const dataYmin = volumeData.reduce((min, [_, dataY]) => Math.min(min, dataY), Infinity);
  const dataYRange = dataYmax - dataYmin;
  const numYTicks = 5;
  const barPlotWidth = xAxisLength / volumeData.length;

  return (
    <div className=" stroke-Coin-sol">
      <svg width={SVG_VOLUME_WIDTH} height={SVG_VOLUME_HEIGHT}>
        <line x1={x0} y1={xAxisY} x2={x0 + xAxisLength} y2={xAxisY} />
        <text x={x0 + xAxisLength + 3} y={xAxisY + 10}>
          거래량
        </text>
        {/* <line x1={x0} y1={y0} x2={x0} y2={y0 + yAxisLength} /> */}
        {Array.from({ length: numYTicks }).map((_, index) => {
          const y = y0 + index * (yAxisLength / numYTicks);
          const yValue = Math.round(dataYmax - index * (dataYRange / numYTicks));

          return (
            // eslint-disable-next-line react/no-array-index-key
            <g key={index}>
              {/* 가로선 */}
              <line x1={SVG_VOLUME_WIDTH - x0} y1={y} x2={x0} y2={y} stroke="gray" />
              {/* 가로선에 표시될 기준값 */}
              <text x={x0 + xAxisLength + 50} y={y + 5} textAnchor="end">
                {Math.abs(yValue) > 999
                  ? `${Math.sign(yValue) * (Math.round(Math.abs(yValue) / 100) / 10)}k`
                  : Math.sign(yValue) * Math.abs(yValue)}
              </text>
            </g>
          );
        })}
        <line x1={SVG_CHART_WIDTH - x0} y1={y0} x2={x0 + xAxisLength} y2={y0 + yAxisLength} />

        {volumeData.map(([day, dateY], idx) => {
          console.log(`dataY : ${dateY}`);
          // x는 바 위치
          const x = x0 + idx * barPlotWidth;
          let yRatio = (dateY - dataYmin) / dataYRange;
          if (yRatio <= 0) yRatio = dateY / dataYRange / 2;

          console.log(`yRatio : ${yRatio}`);
          console.log(`dataYRange : ${dataYRange}`);
          console.log(`dataYmin : ${dataYmin}`);
          // y는 바 길이 측정용
          const y = y0 + (1 - yRatio) * yAxisLength;
          const heights = yRatio * yAxisLength;
          const sidePadding = 5;
          console.log(`x : ${x}`);
          console.log(`y : ${y}`);
          return (
            // eslint-disable-next-line react/no-array-index-key
            <g key={idx}>
              <rect
                fill="red"
                x={x + sidePadding / 2}
                y={y}
                width={barPlotWidth - sidePadding}
                height={heights}
              />
              <text x={x + barPlotWidth / 2} y={xAxisY + 16} textAnchor="middle">
                {day}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default VolumeChart;
