/*-----------历史曲线开始-----------*/
$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#lishiQuxian').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, 
                backgroundColor: "#eaf6ff",
                marginRight: 10
            },
            title: {
                text: '历史数据曲线'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: ''
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#30366E'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: true
            },
            exporting: {
                enabled: false
            },
            series: [{
                color: '#33833F',
                name: '112线',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
        });
    });
});
/*-----------历史曲线结束-----------*/






/*-----------实时曲线开始-----------*/
$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#shishiQuxian').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, 
                marginRight: 10,
                backgroundColor: "#eaf6ff",
                events: {
                    load: function () {

                        /*第1条曲线*/
                        var series01 = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), 
                                y = Math.random();
                            series01.addPoint([x, y], true, true);
                        }, 2000);


                        /*第2条曲线*/
                        /*var series02 = this.series[1];
                        setInterval(function () {
                            var x = (new Date()).getTime(), 
                                y = Math.random();
                            series02.addPoint([x, y], true, true);
                        }, 2000);*/
                    }
                }
            },
            title: {
                text: '实时数据曲线'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: ''
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#30366E'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: true
            },
            exporting: {
                enabled: false
            },
            series: [{
                color: '#33833F',
                name: '122线',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
        });
    });
});
/*-----------实时曲线结束-----------*/





/*-----------电压棒图开始-----------*/
/*$(function () {
    // Create the chart
    $('#dianyaBang').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '电压棒图对比'
        },
        xAxis: {
            type: 'category',
            title: {
                text: ''
            }
        },
        yAxis: {
            title: {
                text: ''
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },
        tooltip: {
            enabled: false
        },
        series: [{
            colorByPoint: true,
            data: [{
                color: "#30356E",
                name: 'I段Uab',
                y: 23
            }, {
                color: "#33833F",
                name: 'I段Ubc',
                y: 24
            }, {
                color: "#30356E",
                name: 'I段Uca',
                y: 45
            }, {
                color: "#33833F",
                name: 'II段Uab',
                y: 34
            }, {
                color: "#30356E",
                name: 'II段Uab',
                y: 23
            }, {
                color: "#33833F",
                name: 'III段Uab',
                y: 47
            },  {
                color: "#30356E",
                name: 'III段Uab',
                y: 18
            }]
        }]
    });
});*/
/*-----------电压棒图结束-----------*/





/*-----------负荷曲线开始-----------*/
$(function () {
    $('#fuheQuxian').highcharts({
        chart: {
            type: 'spline',
            animation: Highcharts.svg,
            backgroundColor: "#eaf6ff",
            marginRight: 10,
            events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                    }
                }
        },
        title: {
            text: '负荷曲线'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            title: {
                text: ''
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            min: 0
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%e. %b}: {point.y:.2f}'
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },

        series: [{
            color: "#BCE784",
            name: '今日有功负荷',
            data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
        }, {
            color: "#5DD39E",
            name: '今日无功负荷',
            data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
        }, {
            color: "#348AA7",
            name: '昨日有功负荷',
            data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
        }, {
            color: "#525174",
            name: '昨日无功负荷',
            data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
        }]
    });
});
/*-----------负荷曲线结束-----------*/



