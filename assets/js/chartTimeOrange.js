//Created by mengruzhang on 2018/4/8.
// learn from http://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/#6-doughnut-chart

$(document).ready(function () {


    // theme plug from highchart.js
        Highcharts.createElement('link', {
            href: 'https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i|Poppins:200,300,400,700,900|Cormorant:400,400i,500,500i,700,700i',
            rel: 'stylesheet',
            type: 'text/css'
        }, null, document.getElementsByTagName('head')[0]);
    
        Highcharts.theme = {
            colors: ["#f8b62d", "#9296fe", "#8A9EDE", "#3ad6d4", "#499BFC"
    
                // , '#ff0066',
                // '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'
            ],
            chart: {
                backgroundColor: null,
                style: {
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight:'200',
                    padding:'10px 10px'
                }
            },
            title: {
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                }
            },
            tooltip: {
                borderWidth: 0,
                backgroundColor: 'rgba(219,219,216,0.8)',
                shadow: false
            },
            legend: {
                itemStyle: {
                    fontWeight: 'bold',
                    fontSize: '12px'
                }
            },
            xAxis: {
                gridLineWidth: 2,
                labels: {
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yAxis: {
                minorTickInterval: 'auto',
                title: {
                    style: {
                        textTransform: 'uppercase'
                    }
                },
                labels: {
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            plotOptions: {
                candlestick: {
                    lineColor: '#404048'
                }
            },
    
    
            // General
            background2: '#F0F0EA'
    
        };
    
    // Add the background image to the container
        Highcharts.wrap(Highcharts.Chart.prototype, 'getContainer', function (proceed) {
            proceed.call(this);
            this.container.style.background =
                'url(http://www.highcharts.com/samples/graphics/sand.png)';
        });
    
    // Apply the theme
        Highcharts.setOptions(Highcharts.theme);
    
    //Data now
    //THREE
        Highcharts.chart('containerOrange', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Smartphone Dependence'
            },
            xAxis: {
                categories: ['Morning Check', 'Night Check', 'Weekend Check', 'Constantly Check', 'Anxious and Irritable']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'James Katz, <i>Perpetual contact: mobile communication, private talk, public performance</i>'
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'Testers',
                data: [70, 56, 48, 51, 44]
            }
                // , {
                //     name: 'Male',
                //     data: [35, 43, 17, 9, 30]
                // }
                // , {
                //     name: 'Joe',
                //     data: [3, 4, 4, 2, 5]
                // }
            ]
        });
    
        //.....
        //end ready
    });
    