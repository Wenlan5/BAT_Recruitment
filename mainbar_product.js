var myChart = echarts.init(document.getElementById('mainbar_product'));

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
        data: ['游戏测试', '游戏运营', '产品策划', '游戏策划', '产品经理'],
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
            6,
            7,
            8,
            13
        ]
    }]
};

myChart.setOption(option);