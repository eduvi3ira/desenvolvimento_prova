google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([ 
          ['Tarefas', 'Horas por Dia'],
          ['Trabalhar',14],
          ['Comer',3],
          ['Assistir TV',4],
          ['Dormir',7]
        ]);

        var options = {
          title: 'Minhas Atividades Diárias'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }