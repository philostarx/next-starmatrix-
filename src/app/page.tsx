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
    <div className="min-h-screen bg-white">
      {/* 메인 컨테이너 */}
      <div className="max-w-7xl mx-auto p-5">
        
        {/* 상단 섹션: 제목, KPI, 테이블 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
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
        </div>

        {/* 차트 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <BarChart data={data.barData} />
          <LineChart data={data.lineData} />
          <PieChart data={data.pieData} />
        </div>
      </div>

      {/* 푸터 섹션 */}
      <footer className="max-w-7xl mx-auto px-5 mt-8">
        <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
          <p>© 2025 Star Matrix Dashboard | ft.s.curs</p>
          <p className="mt-1">Produced by Philostar</p>
        </div>
      </footer>
    </div>
  );
}
