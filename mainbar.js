var myChart = echarts.init(document.getElementById('mainbar'));

option = {
    baseOption: {
        timeline: {
            autoPlay: 'true',
            top: 'top',
            type: 'number',
            label: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#555454'
                },
                emphasis: {
                    color: '#252525'
                }
            },
            lineStyle: {
                color: '#ddd'
            },
            checkpointStyle: {
                color: '#797878',
                borderColor: '#a7a4a4'
            },
            data: ['1', '2', '3', '4', '5']
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} "
        },
        backgroundColor: '#fff',

        series: [{
            name: '岗位数量',
            type: 'bar',
            barWidth: '60%'
        }],
        yAxis: [{
            type: 'category'
        }],
        xAxis: [{
            type: 'value'
        }]

    },

    options: [{
        title: {
            text: '技术岗位Top10',

        },
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
    }, {
        title: {
            text: '支持岗位Top10',
        },
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
            ],
            itemStyle: {
                normal: { color: '#ff613e' }
            }
        }]
    }, {
        title: {
            text: '产品岗位',
        },
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
            barWidth: '40%',
            data: [
                1,
                6,
                7,
                8,
                13
            ],
            itemStyle: {
                normal: { color: '#fcfc05' }
            }
        }]
    }, {
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
            title: {
                text: '设计岗位',
            },
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
            barWidth: '35%',
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
    }, {
        title: {
            text: '内容岗位',
        },
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
            barWidth: '35%',
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
    }],
};

myChart.setOption(option);