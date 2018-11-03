Highcharts.chart('plot', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Restaurant Yelp Reviews'
        },
        xAxis: {
            Name: 'Average Number of Yelp Stars',
            categories: ['1500 Ocean', '608 Restaurant', 'Pokewan', 'Havana 1920', 'Lionfish', 'Born and Raised', 'Hundred Proof', 'Antique Row Cafe', 'Bobboi Natural Gelato', 'Juniper and Ivy']
        },
        yAxis: {
            title: {
                text: 'Yelp Score'
            }
        },
        series: [{
            data: [4, 4.5, 4.5, 4, 4, 4, 4.5, 4, 5, 4]
        }]
    });
