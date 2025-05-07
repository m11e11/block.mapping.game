let map;
let streets = [
    {
        name: "Seltice Way",
        block: 100,
        coords: [{ lat: 47.7125, lng: -116.9510 }, { lat: 47.7125, lng: -116.9400 }]
    },
    {
        name: "Spokane St",
        block: 300,
        coords: [{ lat: 47.7155, lng: -116.9510 }, { lat: 47.7055, lng: -116.9510 }]
    },
    {
        name: "Mullan Ave",
        block: 500,
        coords: [{ lat: 47.7125, lng: -116.9600 }, { lat: 47.7125, lng: -116.9400 }]
    }
];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 47.7125, lng: -116.9510 },
        zoom: 14,
    });

    streets.forEach(street => {
        const streetPath = new google.maps.Polyline({
            path: street.coords,
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 4,
        });

        streetPath.setMap(map);

        streetPath.addListener("click", () => {
            let guess = prompt(`What is the 100-block for ${street.name}?`);
            if (guess === null) return;
            if (parseInt(guess) === street.block) {
                alert("✅ Correct!");
            } else {
                alert(`❌ Incorrect. The correct answer is ${street.block}.`);
            }
        });
    });
}
