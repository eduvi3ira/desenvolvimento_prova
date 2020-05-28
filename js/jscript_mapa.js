  google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Casos a cada um milhão de pessoas'],
        ['Italy', 32877],
        ['United States', 99804],
        ['Brazil', 23473],
        ['United Kingdom', 39914],
        ['Spain', 28837],
        ['Sweden', 4029],
        ['Germany', 8428],
        ['France', 28432]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }