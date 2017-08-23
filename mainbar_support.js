var myChart = echarts.init(document.getElementById('mainbar_support'));

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
        data: ['资产运营管理', '商业分析师', '基础设施工程师', '投资分析师', '法务', '行政类', '营销/销售', '用户研究', '内容运营', '人力资源'],
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
        data: [1,
            2,
            2,
            2,
            3,
            3,
            4,
            5,
            6,
            6
        ]
    }]
};

myChart.setOption(option);