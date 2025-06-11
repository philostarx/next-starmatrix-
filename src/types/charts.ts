import type { EChartsOption } from 'echarts';
import type { CSSProperties } from 'react';

// 바 차트 데이터 인터페이스
export interface BarChartData {
  categories: string[];
  values: number[];
}

// 라인 차트 데이터 인터페이스
export interface LineChartData {
  xAxis: string[];
  series: number[];
}

// 파이 차트 아이템 인터페이스
export interface PieChartItem {
  name: string;
  value: number;
}

// 테이블 데이터 인터페이스
export type TableData = (string | number)[][];

// 전체 차트 데이터 인터페이스
export interface ChartData {
  tableData: TableData;
  barData: BarChartData;
  lineData: LineChartData;
  pieData: PieChartItem[];
}

// 차트 옵션 타입
export type ChartOptions = EChartsOption;

// 차트 컴포넌트 props 인터페이스
export interface ChartComponentProps<T = unknown> {
  data: T;
  options?: ChartOptions;
  height?: string | number;
  width?: string | number;
  className?: string;
  style?: CSSProperties;
}

// 구체적인 차트 컴포넌트 props 인터페이스
export interface BarChartProps extends Omit<ChartComponentProps<BarChartData>, 'data'> {
  data: BarChartData;
}

export interface LineChartProps extends Omit<ChartComponentProps<LineChartData>, 'data'> {
  data: LineChartData;
}

export interface PieChartProps extends Omit<ChartComponentProps<PieChartItem[]>, 'data'> {
  data: PieChartItem[];
}

// KPI 디스플레이 컴포넌트 props 인터페이스
export interface KPIDisplayProps {
  label: string;
  value: string | number;
  className?: string;
}

// 데이터 테이블 컴포넌트 props 인터페이스
export interface DataTableProps {
  data: TableData;
  className?: string;
} 