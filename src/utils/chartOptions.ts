import { ChartOptions, BarChartData, LineChartData, PieChartItem } from '@/types/charts';
import type { CallbackDataParams } from 'echarts/types/dist/shared';

// 차트 옵션 설정
export const chartOptions = {
    // 바 차트 옵션
    getBarOptions: (data: BarChartData): ChartOptions => {
        return {
            grid: {
                left: '10%',
                right: '10%',
                bottom: '15%',
                top: '15%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: data.categories,
                axisLine: {
                    lineStyle: {
                        color: '#999'
                    }
                },
                axisLabel: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#666'
                },
                splitLine: {
                    lineStyle: {
                        color: '#eee'
                    }
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            series: [{
                data: data.values,
                type: 'bar',
                barWidth: '50%',
                itemStyle: {
                    color: (params: CallbackDataParams) => {
                        const colors = ['#ddd', '#aaa', '#666'];
                        return colors[params.dataIndex % colors.length];
                    }
                }
            }]
        };
    },
    
    // 라인 차트 옵션
    getLineOptions: (data: LineChartData): ChartOptions => {
        return {
            grid: {
                left: '10%',
                right: '10%',
                bottom: '15%',
                top: '15%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: data.xAxis,
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#999'
                    }
                },
                axisLabel: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#666'
                },
                splitLine: {
                    lineStyle: {
                        color: '#eee'
                    }
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            series: [{
                data: data.series,
                type: 'line',
                smooth: true,
                symbol: 'none',
                symbolSize: 0,
                itemStyle: {
                    color: '#606060'
                },
                lineStyle: {
                    color: '#666',
                    width: 2
                },
                areaStyle: undefined
            }]
        };
    },
    
    // 파이 차트 옵션
    getPieOptions: (data: PieChartItem[]): ChartOptions => {
        return {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                show: false
            },
            series: [{
                name: 'Data Distribution',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['50%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: data,
                color: ['#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#666666']
            }]
        };
    }
}; 