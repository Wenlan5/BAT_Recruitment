var myChart = echarts.init(document.getElementById('mainpie2'));


option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        x: 'top',
        data: ['腾讯', '阿里', '百度']
    },
    series: [{
        name: '提供岗位数量',
        type: 'pie',
        radius: ['47%', '70%'],
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
                value: 143,
                name: '腾讯',
                itemStyle: {
                    normal: { color: '#70ad47' }
                }
            },
            {
                value: 84,
                name: '阿里',
                itemStyle: {
                    normal: { color: '#ffc000' }
                }
            },
            {
                value: 71,
                name: '百度',
                itemStyle: {
                    normal: { color: '#5b9bd5' }
                }
            },

        ]
    }]
};

myChart.setOption(option);