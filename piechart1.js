var myChart = echarts.init(document.getElementById('mainpie1'));


option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['技术', '支持', '产品', '设计', '内容']
    },
    series: [{
        name: '岗位数量',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '40',
                    fontWeight: 'bolder'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 188,
                name: '技术',
                itemStyle: {
                    normal: { color: '#03a188' }
                }
            },
            {
                value: 57,
                name: '支持',
                itemStyle: {
                    normal: { color: '#ff613e' }
                }
            },
            {
                value: 35,
                name: '产品',
                itemStyle: {
                    normal: { color: '#fcfc05' }
                }
            },
            {
                value: 28,
                name: '设计',
                itemStyle: {
                    normal: { color: '#a6ea79' }
                }
            },
            {
                value: 5,
                name: '内容',
                itemStyle: {
                    normal: { color: '#4cbf71' }
                }
            }
        ],


    }]
};

myChart.setOption(option);