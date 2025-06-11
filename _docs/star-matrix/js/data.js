// 차트 데이터 관리
const chartData = {
    // 테이블 데이터 - 이미지와 일치하게 수정
    tableData: [
        ['항목', '금액'],
        ['Content Creation', '40,000'],
        ['Email Campaigns', '25,000'],
        ['Influencer Collaboration', '35,000'],
        ['Online Advertising', '120,000'],
        ['Other Promotions', '15,000'],
        ['Social Media Marketing', '80,000']
    ],
    
    // 바 차트 데이터 - 그레이스케일 톤에 맞게 수정
    barData: {
        categories: ['카테고리1', '카테고리2', '카테고리3'],
        values: [30, 50, 40]
    },
    
    // 라인 차트 데이터 - 이미지와 유사하게 수정
    lineData: {
        xAxis: ['1월', '2월', '3월', '4월', '5월', '6월'],
        series: [10, 25, 15, 20, 35, 25]
    },
    
    // 파이 차트 데이터 - 그레이스케일 분포에 맞게 수정
    pieData: [
        { value: 30, name: '항목1' },
        { value: 25, name: '항목2' },
        { value: 20, name: '항목3' },
        { value: 15, name: '항목4' },
        { value: 10, name: '항목5' }
    ]
}; 