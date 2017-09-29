var $filter = $('#practice_area-select');
var $grid = $('.grid');
var $items = $grid.children('.item');

$filter.on('change', function(event) {
	var $selectedItems = $items.filter('[data-type="' + $(this).val() + '"]');
	$selectedItems.prependTo($grid);
});




var myMap = function() {

	var	options = {
		zoom: 5,
		center: new google.maps.LatLng(38.810821,-95.053711),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		// disableDefaultUI: true
	}

	/*
	Load the map then markers
	@param object settings (configuration options for map)
	@return undefined
	*/
	function init(settings) {
		map = new google.maps.Map(document.getElementById( settings.idSelector ), options);
		markerLocation = settings.markerLocation;
		loadMarkers();
	}

	/*
	=======
	MARKERS
	=======
	*/
	markers = {};
	markerList = [];

	/*
	Load markers onto the Google Map from a provided array or demo schoolData (data.js)
	@param array  schoolList [optional] (list of schools to load)
	@return undefined
	*/
	function loadMarkers( schoolList) {

		// optional argument of school
		var schools = ( typeof  schoolList !== 'undefined' ) ?  schoolList : schoolData;

		var j = 1; // for lorempixel

		for( i=0; i < schools.length; i++ ) {
			var school = schools[i];

			// if its already on the map, dont put it there again
			if( markerList.indexOf(school.id) !== -1 ) continue;

			var lat = school.lat,
			lng = school.lng,
			markerId = school.id;

			var infoWindow = new google.maps.InfoWindow({
				maxWidth: 400
			});

			var marker = new google.maps.Marker({
				position: new google.maps.LatLng( lat, lng ),
				title: school.name,
				markerId: markerId,
				icon: markerLocation,
				map: map
			});

			markers[markerId] = marker;
			markerList.push(school.id);

			// 	var content = ['<div class="pop-up"><div class="iw-text"><strong>', school.name,
			// 	'</strong><br>Age: ', school.age, '<br>Followers: ', school.followers,
			// 	'<br>practice_area: ', school.practice_area, '</div></div>'].join('');


			var content = ['<div class="grid">', school.name,
			'Avvo Rating: ', school.avvo_rating, '<br>Client Rating: ', school.client_rating,
			'<br>practice_area: ', school.blurb, '</div>'].join('');








		google.maps.event.addListener(marker, 'click', (function (marker, content) {
			return function() {
				infoWindow.setContent(content);
				infoWindow.open(map, marker);
			}
		})(marker, content));
	}
}

/*
Remove marker from map and our list of current markers
@param int id (id of the marker element)
@return undefined
*/
function removeschoolMarker(id) {
	if( markers[id] ) {
		markers[id].setMap(null);
		loc = markerList.indexOf(id);
		if (loc > -1) markerList.splice(loc, 1);
		delete markers[id];
	}
}

/*
======
FILTER
======
*/

// default all filters off
var filter = {
	followers: 0,
	practice_area: 0,
	from: 0
}
var filterMap;

/*
Helper function
@param array a (array of arrays)
@return array (common elements from all arrays)
*/
function reduceArray(a) {
	r = a.shift().reduce(function(res, v) {
		if (res.indexOf(v) === -1 && a.every(function(a) {
			return a.indexOf(v) !== -1;
		})) res.push(v);
		return res;
	}, []);
	return r;
}

/*
Helper function
@param string n
@return bool
*/
function isInt(n) {
	return n % 1 === 0;
}


/*
Decides which filter function to call and stacks all filters together
@param string filterType (the property that will be filtered upon)
@param string value (selected filter value)
@return undefined
*/
function filterCtrl(filterType, value) {
	// result array
	var results = [];

	if( isInt(value) ) {
		filter[filterType] = parseInt(value);
	} else {
		filter[filterType] = value;
	}

	for( k in filter ) {
		if( !filter.hasOwnProperty(k) && !( filter[k] !== 0 ) ) {
			// all the filters are off
			loadMarkers();
			return false;
		} else if ( filter[k] !== 0 ) {
			// call filterMap function and append to r array
			results.push( filterMap[k]( filter[k] ) );
		} else {
			// fail silently
		}
	}

	if( filter[filterType] === 0 ) results.push( schoolData );

	/*
	if there is 1 array (1 filter applied) set it,
	else find markers that are common to every results array (pass every filter)
	*/
	if( results.length === 1 ) {
		results = results[0];
	} else {
		results = reduceArray( results );
	}

	loadMarkers( results );

}

/*
The keys in this need to be mapped 1-to-1 with the keys in the filter variable.
*/
filterMap = {
	practice_area: function( value ) {
		return filterByString('practice_area', value);
	},
}

/*
Filters marker data based upon a string match
@param string dataProperty (the key that will be filtered upon)
@param string value (selected filter value)
@return array (schools that made it through the filter)
*/
function filterByString( dataProperty, value ) {
	var schools = [];

	for( var i=0; i < schoolData.length; i++ ) {
		var school = schoolData[i];
		if( school[dataProperty] == value ) {
			schools.push( school );
		} else {
			removeschoolMarker( school.id );
		}
	}
	return schools;
}

/*
Filters out integers that are under the provided value
@param string dataProperty (the key that will be filtered upon)
@param int value (selected filter value)
@return array (schools that made it through the filter)
*/
function filterIntsLessThan( dataProperty, value ) {
	var schools = [];

	for( var i=0; i < schoolData.length; i++ ) {
		var school = schoolData[i];
		if( school[dataProperty] > value ) {
			schools.push( school )
		} else {
			removeschoolMarker( school.id );
		}
	}
	return schools;
}

// Takes all the filters off
function resetFilter() {
	filter = {

		practice_area: 0

	}
}

return {
	init: init,
	loadMarkers: loadMarkers,
	filterCtrl: filterCtrl,
	resetFilter: resetFilter
};
}();


$(function() {

	var mapConfig = {
		idSelector: 'map-canvas',
		markerLocation: 'img/map-marker.png'
	}

	myMap.init( mapConfig );

	$('.load-btn').on('click', function() {
		var $this = $(this);
		$('select').val(0);
		myMap.resetFilter();
		myMap.loadMarkers();

		if( $this.hasClass('is-success') ) {
			$this.removeClass('is-success').addClass('is-default');
		}
	});

	$('.practice_area-select').on('change', function() {
		myMap.filterCtrl('practice_area', this.value);

	});

});


$(document).ready(function(){
 	console.log(schoolData);

	var schoolCard = [];

	var school.name = "claire"
	var school = "clairedngcgvhmd"


	var schoolCards = ['<div class="grid">', school.name,
	'Avvo Rating: ', school.avvo_rating, '<br>Client Rating: ', school.client_rating,
	'<br>practice_area: ', school.blurb, '</div>'].join('');


});
