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
        name: '访问来源',
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
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [
            { value: 188, name: '技术' },
            { value: 57, name: '支持' },
            { value: 35, name: '产品' },
            { value: 28, name: '设计' },
            { value: 5, name: '内容' }
        ]
    }]
};

myChart.setOption(option);