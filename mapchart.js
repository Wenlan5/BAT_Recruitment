// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

var data = [{
    name: '北京',
    value: 106
}, {
    name: '深圳',
    value: 49
}, {
    name: '广州',
    value: 47
}, {
    name: '上海',
    value: 39
}, {
    name: '成都',
    value: 31
}, {
    name: '杭州',
    value: 20
}, {
    name: '南京',
    value: 2
}, {
    name: '厦门',
    value: 2
}, {
    name: '天津',
    value: 1
}, {
    name: '阳泉',
    value: 1
}];

var geoCoordMap = {
    '阳泉': [112.5, 38.00],
    '厦门': [118.1, 24.46],
    '广州': [113.23, 23.16],
    '深圳': [114.07, 22.62],
    '南京': [118.78, 32.04],
    '北京': [116.46, 39.92],
    '天津': [117.2, 39.13],
    '成都': [104.06, 30.67],
    '杭州': [120.19, 30.26]
};

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
    backgroundColor: '#333c48',
    tooltip: {
        trigger: 'item'
    },
    legend: {

        orient: 'vertical',
        y: 'bottom',
        x: 'right',
        data: ['BAT'],
        textStyle: {
            color: 'rgb(000, 000, 128)'
        }
    },

    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        zoom: 1.2,
        center: [104.06, 35.67],
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
        name: 'BAT',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(data),
        symbolSize: function(val) {
            return val[2] / 10;
        },
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: false
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#ddb926'
            }
        }
    }, {
        name: '职位信息：',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(data.sort(function(a, b) {
            return b.value - a.value;
        }).slice(0, 11)),
        symbolSize: function(val) {
            return 8 * Math.pow(val[2], 1 / 4);
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#f4e925',
                shadowBlur: 55,
                shadowColor: '#333'
            }
        },
        zlevel: 10
    }]
};

myChart.setOption(option);