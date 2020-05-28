google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Data', 'Casos Confirmados'],
          ['1 de fev. de 2020',  11953],
          ['1 de mar. de 2020',  87137],
          ['1 de abr. de 2020',  750867],
          ['1 de mai. de 2020',  3090445]
        ]);

        var options = {
          title: 'Casos ao longo do tempo - Global',
          
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }