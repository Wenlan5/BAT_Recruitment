var myChart = echarts.init(document.getElementById('mainbar_tech'));

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
        data: ['安全技术', '运营维护', '后台开发', '语音处理', '图形算法', '软件开发', '测试开发', '移动开发', '前端开发', '机器学习'],
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
        data: [9,
            9,
            10,
            11,
            13,
            15,
            16,
            18,
            20,
            34
        ],
        itemStyle: {
            normal: { color: '#03a188' }
        }
    }]
};

myChart.setOption(option);