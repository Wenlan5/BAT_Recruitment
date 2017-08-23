var myChart = echarts.init(document.getElementById('mainbar_content'));

option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: [{
        type: 'category',
        data: ['编导', '编剧', '签约编辑', '编辑'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    xAxis: [{
        type: 'value'
    }],
    series: [{
        name: '岗位数量',
        type: 'bar',
        barWidth: '60%',
        data: [
            1,
            1,
            1,
            2
        ],
        itemStyle: {
            normal: { color: '#4cbf71' }
        }
    }]
};

myChart.setOption(option);