'use client';

import { useEffect, useState } from 'react';
import BarChart from '@/components/charts/BarChart';
import LineChart from '@/components/charts/LineChart';
import PieChart from '@/components/charts/PieChart';
import KPIDisplay from '@/components/ui/KPIDisplay';
import DataTable from '@/components/ui/DataTable';
import { ChartData } from '@/types/charts';

export default function Home() {
  const [data, setData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/data/chartData.json');
        const chartData = await response.json();
        setData(chartData);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading || !data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading dashboard data...</div>
      </div>
    );
  }

  // KPI 데이터 계산 (바 차트 값의 총합)
  const kpiValue = data.barData.values.reduce((sum, value) => sum + value, 0);

  return (
    <div className="container">
      {/* 제목 섹션 */}
      <div className="title-section">
        <h1>Star Matrix Dashboard</h1>
      </div>

      {/* KPI 섹션 */}
      <KPIDisplay 
        label="KPI"
        value={kpiValue.toLocaleString()}
      />

      {/* 테이블 섹션 */}
      <DataTable data={data.tableData} />

      {/* 차트 섹션 */}
      <div className="charts-section">
        <BarChart data={data.barData} />
        <LineChart data={data.lineData} />
        <PieChart data={data.pieData} />
      </div>
    </div>
  );
}
