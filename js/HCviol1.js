Highcharts.chart('hcviol1', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Violences phyisques et sexuelles subies par les femmes'
    },
    xAxis: {
        categories: ['2006-2010', '2011-2017']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Part des violences physiques et sexuelles (\%)'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
         name: 'Violences physiques',
        data: [239400,	204350], color: '#264874' 
    }, {
        name: 'Violences sexuelles',
        data: [58100, 46900], color: '#74c476' 
    }]
});