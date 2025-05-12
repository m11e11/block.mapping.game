let map;
let streets = [
    {
        "name": "Beck",
        "block": "5800 West",
        "choices": [
            "5800 West",
            "2300 West",
            "2400 North"
        ],
        "coords": [
            {
                "lat": 47.713,
                "lng": -116.951
            },
            {
                "lat": 47.7135,
                "lng": -116.95
            }
        ]
    },
    {
        "name": "Pleasantview",
        "block": "4000 West",
        "choices": [
            "3200 West",
            "4000 West",
            "800 East"
        ],
        "coords": [
            {
                "lat": 47.714,
                "lng": -116.952
            },
            {
                "lat": 47.7145,
                "lng": -116.949
            }
        ]
    },
    {
        "name": "Corbin Road",
        "block": "3200 West",
        "choices": [
            "9600 North",
            "3200 West",
            "1500 to 1600 North"
        ],
        "coords": [
            {
                "lat": 47.715,
                "lng": -116.953
            },
            {
                "lat": 47.7155,
                "lng": -116.948
            }
        ]
    },
    {
        "name": "Maguire",
        "block": "2300 West",
        "choices": [
            "800 East",
            "2300 West",
            "800 West"
        ],
        "coords": [
            {
                "lat": 47.716,
                "lng": -116.954
            },
            {
                "lat": 47.7165,
                "lng": -116.947
            }
        ]
    },
    {
        "name": "Chase",
        "block": "800 West",
        "choices": [
            "1500 to 1600 North",
            "1500 East",
            "800 West"
        ],
        "coords": [
            {
                "lat": 47.717,
                "lng": -116.955
            },
            {
                "lat": 47.7175,
                "lng": -116.946
            }
        ]
    },
    {
        "name": "Spokane Street",
        "block": "0 (East/West Marker)",
        "choices": [
            "0 (East/West Marker)",
            "7200 East",
            "0 (North/South Marker)"
        ],
        "coords": [
            {
                "lat": 47.718,
                "lng": -116.956
            },
            {
                "lat": 47.7185,
                "lng": -116.945
            }
        ]
    },
    {
        "name": "Idaho",
        "block": "800 East",
        "choices": [
            "800 East",
            "7200 East",
            "5800 West"
        ],
        "coords": [
            {
                "lat": 47.719,
                "lng": -116.957
            },
            {
                "lat": 47.7195,
                "lng": -116.944
            }
        ]
    },
    {
        "name": "Syringa",
        "block": "1500 East",
        "choices": [
            "1500 East",
            "5500 East",
            "3200 West"
        ],
        "coords": [
            {
                "lat": 47.72,
                "lng": -116.958
            },
            {
                "lat": 47.7205,
                "lng": -116.943
            }
        ]
    },
    {
        "name": "Greensferry",
        "block": "2400 East",
        "choices": [
            "4000 North",
            "4000 East",
            "2400 East"
        ],
        "coords": [
            {
                "lat": 47.721,
                "lng": -116.959
            },
            {
                "lat": 47.7215,
                "lng": -116.942
            }
        ]
    },
    {
        "name": "Cecil Road",
        "block": "3200 East",
        "choices": [
            "4000 East",
            "3200 East",
            "5500 East"
        ],
        "coords": [
            {
                "lat": 47.722,
                "lng": -116.96
            },
            {
                "lat": 47.7225,
                "lng": -116.941
            }
        ]
    },
    {
        "name": "Highway 41",
        "block": "4000 East",
        "choices": [
            "4000 East",
            "2400 North",
            "5800 West"
        ],
        "coords": [
            {
                "lat": 47.723,
                "lng": -116.961
            },
            {
                "lat": 47.7235,
                "lng": -116.94
            }
        ]
    },
    {
        "name": "Meyer",
        "block": "5500 East",
        "choices": [
            "300\u2013800 North",
            "0 (East/West Marker)",
            "5500 East"
        ],
        "coords": [
            {
                "lat": 47.724,
                "lng": -116.962
            },
            {
                "lat": 47.7245,
                "lng": -116.939
            }
        ]
    },
    {
        "name": "Huetter Road",
        "block": "7200 East",
        "choices": [
            "800 West",
            "7200 East",
            "1500 East"
        ],
        "coords": [
            {
                "lat": 47.725,
                "lng": -116.963
            },
            {
                "lat": 47.7255,
                "lng": -116.938
            }
        ]
    },
    {
        "name": "Hayden",
        "block": "9600 North",
        "choices": [
            "5500 East",
            "800 West",
            "9600 North"
        ],
        "coords": [
            {
                "lat": 47.726,
                "lng": -116.964
            },
            {
                "lat": 47.7265,
                "lng": -116.937
            }
        ]
    },
    {
        "name": "Prairie",
        "block": "4000 North",
        "choices": [
            "800 East",
            "4000 North",
            "0 (North/South Marker)"
        ],
        "coords": [
            {
                "lat": 47.727,
                "lng": -116.965
            },
            {
                "lat": 47.7275,
                "lng": -116.936
            }
        ]
    },
    {
        "name": "Poleline",
        "block": "2400 North",
        "choices": [
            "1500 to 1600 North",
            "2400 North",
            "300\u2013800 North"
        ],
        "coords": [
            {
                "lat": 47.728,
                "lng": -116.966
            },
            {
                "lat": 47.7285,
                "lng": -116.935
            }
        ]
    },
    {
        "name": "15th / 16th Street",
        "block": "1500 to 1600 North",
        "choices": [
            "800 North",
            "800 West",
            "1500 to 1600 North"
        ],
        "coords": [
            {
                "lat": 47.729,
                "lng": -116.967
            },
            {
                "lat": 47.7295,
                "lng": -116.934
            }
        ]
    },
    {
        "name": "Mullan",
        "block": "800 North",
        "choices": [
            "2400 East",
            "7200 East",
            "800 North"
        ],
        "coords": [
            {
                "lat": 47.73,
                "lng": -116.968
            },
            {
                "lat": 47.7305,
                "lng": -116.933
            }
        ]
    },
    {
        "name": "Seltice",
        "block": "300\u2013800 North",
        "choices": [
            "300\u2013800 North",
            "1500 to 1600 North",
            "2400 North"
        ],
        "coords": [
            {
                "lat": 47.731,
                "lng": -116.969
            },
            {
                "lat": 47.7315,
                "lng": -116.932
            }
        ]
    },
    {
        "name": "1st Street",
        "block": "0 (North/South Marker)",
        "choices": [
            "0 (North/South Marker)",
            "800 North",
            "3200 East"
        ],
        "coords": [
            {
                "lat": 47.732,
                "lng": -116.97
            },
            {
                "lat": 47.7325,
                "lng": -116.931
            }
        ]
    }
];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 47.7125, lng: -116.9510 },
        zoom: 13,
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
            const container = document.createElement("div");
            container.innerHTML = `<strong>What is the 100-block for ${
                street.name
            }?</strong><br>`;
            street.choices.forEach(choice => {
                const btn = document.createElement("button");
                btn.textContent = choice;
                btn.style.margin = "4px";
                btn.onclick = () => {
                    alert(choice === street.block ? "✅ Correct!" : `❌ Incorrect. The correct answer is ${street.block}.`);
                    document.body.removeChild(container);
                };
                container.appendChild(btn);
            });
            Object.assign(container.style, {
                position: "absolute",
                top: "100px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "white",
                border: "1px solid #ccc",
                padding: "10px",
                zIndex: 1000
            });
            document.body.appendChild(container);
        });
    });
}
