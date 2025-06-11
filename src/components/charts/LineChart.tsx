'use client';

import { FC, useMemo } from 'react';
import ReactECharts from 'echarts-for-react';
import { LineChartProps } from '@/types/charts';
import { chartOptions } from '@/utils/chartOptions';

const LineChart: FC<LineChartProps> = ({ 
  data, 
  options, 
  height = '100%', 
  width = '100%',
  className = ''
}) => {
  const chartOption = useMemo(() => {
    return options || chartOptions.getLineOptions(data);
  }, [data, options]);

  return (
    <div className={`chart-container ${className}`}>
      <ReactECharts
        option={chartOption}
        style={{ height, width }}
        opts={{ renderer: 'canvas' }}
      />
    </div>
  );
};

export default LineChart; 