document.addEventListener('DOMContentLoaded', function() {
    // 테이블 생성
    createDataTable();
    
    // 차트 컨테이너 요소 가져오기
    const barChartContainer = document.getElementById('bar-chart');
    const lineChartContainer = document.getElementById('line-chart');
    const pieChartContainer = document.getElementById('pie-chart');
    
    // 차트 인스턴스 초기화
    const barChart = echarts.init(barChartContainer);
    const lineChart = echarts.init(lineChartContainer);
    const pieChart = echarts.init(pieChartContainer);
    
    // 차트 옵션 설정
    const barOptions = chartOptions.getBarOptions(chartData.barData);
    const lineOptions = chartOptions.getLineOptions(chartData.lineData);
    const pieOptions = chartOptions.getPieOptions(chartData.pieData);
    
    // 차트 렌더링
    barChart.setOption(barOptions);
    lineChart.setOption(lineOptions);
    pieChart.setOption(pieOptions);
    
    // 반응형 차트를 위한 이벤트 리스너
    window.addEventListener('resize', function() {
        barChart.resize();
        lineChart.resize();
        pieChart.resize();
    });
    
    // 테이블 생성 함수
    function createDataTable() {
        const tableElement = document.getElementById('data-table');
        let tableHTML = '';
        
        // 테이블 본문만 생성 (헤더 제거)
        tableHTML += '<tbody>';
        // 첫 번째 행(헤더)도 일반 데이터로 취급하지 않고 1부터 시작
        for (let i = 1; i < chartData.tableData.length; i++) {
            tableHTML += '<tr>';
            chartData.tableData[i].forEach(cellText => {
                tableHTML += `<td>${cellText}</td>`;
            });
            tableHTML += '</tr>';
        }
        tableHTML += '</tbody>';
        
        tableElement.innerHTML = tableHTML;
    }
}); 