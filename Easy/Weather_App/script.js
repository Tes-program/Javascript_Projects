const input = document.querySelector('[data-search-bar]');
const searchBox = new google.maps.places.SearchBox(input)
searchBox.addListener('places_changed', () => {
    const place = searchBox.getPlaces()[0];
    if (place == null) return 
    const latitude = place.geometry.location.lat();
    const longitude = place.geometry.location.lng();
    fetch ('/weather' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            latitude: latitude,
            longitude: longitude
        })
    })
    .then(response => response.json()).then(data => {
        setWeatherData(data, place.formatted_address
            )
    })  })