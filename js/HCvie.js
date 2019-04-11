var categories = [
    '1975', '1977',
    '1979', '1981',
    '1983', '1985', '1987',
    '1989', '1991',
    '1993','1995', '1997',
    '1999', '2001','2003','2005',
    '2007', '2009','2011','2013', '2015','2017'
];

Highcharts.chart('hcvie', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Espérance de vie à la naissance'
    },
    subtitle: {
        text: ''
    },
    xAxis: [{
        categories: categories,
        reversed: false,
        labels: {
            step: 1
        }
    }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
            step: 1
        }
    }],
    yAxis: {
        title: {
            text: null
        },
        labels: {
            formatter: function () {
                return Math.abs(this.value);
            }
        }
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name  + ' en ' + this.point.category + '</b><br/>' +
                'Espérance de vie : ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
        }
    },

    series: [{
        name: 'Hommes',
        data: [
            -69.0,	-69.7, -70.1,	-70.4,	-70.7,	-71.3,	-72.0,
            -72.5,	-72.9,	-73.3,	-73.9,	-74.6,	-75.0,	-75.5,	
            -75.9,	-76.8,	-77.4,	-77.8,	-78.4,	-78.8, -79.0,	-79.5,
        ]
    }, {
        name: 'Femmes',
        data: [
           76.9, 	77.8, 78.3, 78.5, 78.8, 79.4, 80.3, 80.6, 	
           81.2, 81.5, 81.9, 82.3, 82.5, 82.9, 83.0, 83.9, 84.4, 
           84.5, 85.0, 85.0, 85.1, 85.4,
        ]
    }]
});