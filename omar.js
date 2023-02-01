let currentLocation = null;

function goToLocation(locationName) {
    locations.forEach((location) => {
        if (location.name === locationName) {
            currentLocation = location;
        }
    });
}

function playerCreating() {
    return Player;
}