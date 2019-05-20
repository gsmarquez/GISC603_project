  document.getElementById("option3").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "3" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_3')
            }}).addTo(map);
        },

    })});
  document.getElementById("option4").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "4" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_4')
            }}).addTo(map);
        },
      error: function (xhr,status,error) {
      alert("ERROR: "+error);
          }
        });
  });
  document.getElementById("option5").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "5" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
      url:'load_geojson.php',
      success: function(response){
        jsnStops= JSON.parse(response);
        lyrbusstops = L.geoJSON(jsnStops,
          {pointToLayer:returnStopMarker,
           filter:
              function(feature,layer){
                return(feature.properties.hour == 'hr_5')
              }}).addTo(map);
          },

    })});
  document.getElementById("option6").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "6" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_6')
            }}).addTo(map);
        },

    })});
  document.getElementById("option7").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "7" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_7')
            }}).addTo(map);
        },
    })});
  document.getElementById("option8").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "8" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_8')
            }}).addTo(map);
        },
    })});
  document.getElementById("option9").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "9" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_9')
            }}).addTo(map);
        },
    })});
  document.getElementById("option10").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "10" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_10')
            }}).addTo(map);
        },
    })});
  document.getElementById("option11").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "11" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_11')
            }}).addTo(map);
        },
    })});

  document.getElementById("option12").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "12" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_12')
            }}).addTo(map);
        },
    })});
  document.getElementById("option13").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "13" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_13')
            }}).addTo(map);
        },
    })});
  document.getElementById("option14").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "14" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_14')
            }}).addTo(map);
        },
    })});
  document.getElementById("option15").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "15" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_15')
            }}).addTo(map);
        },
    })});
  document.getElementById("option16").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "16" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_16')
            }}).addTo(map);
        },
    })});
  document.getElementById("option17").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "17" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_17')
            }}).addTo(map);
        },
    })});
  document.getElementById("option18").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "18" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_18')
            }}).addTo(map);
        },
    })});
  document.getElementById("option19").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "19" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_19')
            }}).addTo(map);
        },
    })});
  document.getElementById("option20").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "20" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_20')
            }}).addTo(map);
        },
    })});
  document.getElementById("option21").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "21" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_21')
            }}).addTo(map);
        },
    })});
  document.getElementById("option22").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "22" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_22')
            }}).addTo(map);
        },
    })});
  document.getElementById("option23").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "23" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_23')
            }}).addTo(map);
        },
    })});
  document.getElementById("option24").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "24" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_24')
            }}).addTo(map);
        },
    })});
  document.getElementById("option25").addEventListener('click', function(event) {
  theExpression = 'feature.properties.hour == "25" ';
  console.log(theExpression); 
    map.removeLayer(lyrbusstops);
    $.ajax({
    url:'load_geojson.php',
    success: function(response){
      jsnStops= JSON.parse(response);
      lyrbusstops = L.geoJSON(jsnStops,
        {pointToLayer:returnStopMarker,
         filter:
            function(feature,layer){
              return(feature.properties.hour == 'hr_25')
            }}).addTo(map);
        },
    })});
