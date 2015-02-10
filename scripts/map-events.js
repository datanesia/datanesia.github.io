   var map;
    $(document).ready(function(){
      map = new GMaps({
        div: '#map-events',
        lat: -3.82,
        lng: 113.921327,
        zoom: 4,
      });
      
      Papa.parse("/events/events_map.csv", {
		download: true,
		header: true,
		complete: function(results){
			console.log("Finished",results.data);
			results.data.forEach(function(event){
				map.addMarker({
					lat: event['lat'],
					lng: event['lng'],
					title: event['title'],
					infoWindow: {
						content: event['info']
					} 
				});
			});
		}
	})
      
    });
    
    