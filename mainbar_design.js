var myChart = echarts.init(document.getElementById('mainbar_design'));

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
        data: ['视觉设计', '交互设计', '游戏美术设计', '多媒体设计'],
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
            8,
            9,
            10
        ],
        itemStyle: {
            normal: { color: '#a6ea79' }
        }
    }]
};

myChart.setOption(option);