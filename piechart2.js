var myChart = echarts.init(document.getElementById('mainpie2'));


option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['腾讯', '阿里', '百度']
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
            { value: 143, name: '腾讯' },
            { value: 84, name: '阿里' },
            { value: 71, name: '百度' },

        ]
    }]
};

myChart.setOption(option);