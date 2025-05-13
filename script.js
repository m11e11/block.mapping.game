let map;
let streets = [
    {
        "name": "Beck",
        "block": "5800 West",
        "choices": [
            "5800 West",
            "2300 West",
            "1600 North"
        ],
        "coords": [
            {
                "lat": 47.7454415,
                "lng": -117.0162392
            },
            {
                "lat": 47.7037547,
                "lng": -117.0231056
            }
        ]
    },
    {
        "name": "Pleasantview",
        "block": "4000 West",
        "choices": [
            "4000 West",
            "6400 West",
            "3200 West"
        ],
        "coords": [
            {
                "lat": 47.7520206,
                "lng": -117.0021629
            },
            {
                "lat": 47.6946277,
                "lng": -117.0028496
            }
        ]
    },
    {
        "name": "Corbin Road",
        "block": "3200 West",
        "choices": [
            "1600 North",
            "3200 West",
            "4500 to 5800 East"
        ],
        "coords": [
            {
                "lat": 47.74521060000001,
                "lng": -116.9911766
            },
            {
                "lat": 47.7030039,
                "lng": -116.9910479
            }
        ]
    },
    {
        "name": "Maguire",
        "block": "2300 West",
        "choices": [
            "2500 to 5500 West",
            "800 West",
            "2300 West"
        ],
        "coords": [
            {
                "lat": 47.7630992,
                "lng": -116.9812202
            },
            {
                "lat": 47.7060074,
                "lng": -116.9805336
            }
        ]
    },
    {
        "name": "Chase",
        "block": "800 West",
        "choices": [
            "500 East",
            "5500 East",
            "800 West"
        ],
        "coords": [
            {
                "lat": 47.7614837,
                "lng": -116.95890430000001
            },
            {
                "lat": 47.7150747,
                "lng": -116.9585609
            }
        ]
    },
    {
        "name": "Spokane Street",
        "block": "East and West Marker. Spokane is Zero",
        "choices": [
            "1200 North",
            "1500 East",
            "East and West Marker. Spokane is Zero"
        ],
        "coords": [
            {
                "lat": 47.7453261,
                "lng": -116.94826129999998
            },
            {
                "lat": 47.6969385,
                "lng": -116.9498062
            }
        ]
    },
    {
        "name": "Idaho",
        "block": "800 East",
        "choices": [
            "800 North",
            "3200 West",
            "800 East"
        ],
        "coords": [
            {
                "lat": 47.78478810000001,
                "lng": -116.93727490000002
            },
            {
                "lat": 47.7110321,
                "lng": -116.9376183
            }
        ]
    },
    {
        "name": "Syringa",
        "block": "1500 East",
        "choices": [
            "5500 East",
            "1200 North",
            "1500 East"
        ],
        "coords": [
            {
                "lat": 47.7374185,
                "lng": -116.92654610000001
            },
            {
                "lat": 47.71605640000001,
                "lng": -116.92654610000001
            }
        ]
    },
    {
        "name": "Greensferry",
        "block": "2400 East",
        "choices": [
            "North and South Marker. 1st is Zero",
            "1600 North",
            "2400 East"
        ],
        "coords": [
            {
                "lat": 47.8057761,
                "lng": -116.91135409999998
            },
            {
                "lat": 47.7016753,
                "lng": -116.9156456
            }
        ]
    },
    {
        "name": "Cecil Road",
        "block": "3200 East",
        "choices": [
            "North / South marker. 1st is Zero",
            "3200 East",
            "3200 West"
        ],
        "coords": [
            {
                "lat": 47.7399006,
                "lng": -116.9051743
            },
            {
                "lat": 47.7159986,
                "lng": -116.9053459
            }
        ]
    },
    {
        "name": "Highway 41",
        "block": "4000 East",
        "choices": [
            "800 West",
            "4000 East",
            "East and West Marker. Spokane is Zero"
        ],
        "coords": [
            {
                "lat": 47.7594066,
                "lng": -116.8941879
            },
            {
                "lat": 47.7109166,
                "lng": -116.89487460000001
            }
        ]
    },
    {
        "name": "Meyer",
        "block": "5500 East",
        "choices": [
            "5500 East",
            "North / South Marker",
            "3200 West"
        ],
        "coords": [
            {
                "lat": 47.7591758,
                "lng": -116.8729019
            },
            {
                "lat": 47.72315880000001,
                "lng": -116.8729019
            }
        ]
    },
    {
        "name": "Huetter Road",
        "block": "7200 East",
        "choices": [
            "7200 East",
            "North / South marker. 1st is Zero",
            "North / South Marker"
        ],
        "coords": [
            {
                "lat": 47.7591758,
                "lng": -116.8509293
            },
            {
                "lat": 47.7052188,
                "lng": -116.8513843
            }
        ]
    },
    {
        "name": "Wyoming",
        "block": "11100 North",
        "choices": [
            "7200 East",
            "11100 North",
            "300-800 North"
        ],
        "coords": [
            {
                "lat": 47.7741178,
                "lng": -116.9372749
            },
            {
                "lat": 47.7736564,
                "lng": -116.8511009
            }
        ]
    },
    {
        "name": "Hayden",
        "block": "9600 North",
        "choices": [
            "400 North",
            "11100 North",
            "9600 North"
        ],
        "coords": [
            {
                "lat": 47.7599836,
                "lng": -116.98053360000002
            },
            {
                "lat": 47.7591758,
                "lng": -116.85092930000002
            }
        ]
    },
    {
        "name": "Prairie",
        "block": "4000 North",
        "choices": [
            "2400 North",
            "4800 East",
            "4000 North"
        ],
        "coords": [
            {
                "lat": 47.7454415,
                "lng": -117.0162392
            },
            {
                "lat": 47.7448643,
                "lng": -116.85092930000002
            }
        ]
    },
    {
        "name": "Poleline",
        "block": "2400 North",
        "choices": [
            "2400 North",
            "East and West Marker. Spokane is Zero",
            "7200 East"
        ],
        "coords": [
            {
                "lat": 47.730318,
                "lng": -116.85127260000002
            },
            {
                "lat": 47.7308953,
                "lng": -117.0019913
            }
        ]
    },
    {
        "name": "15th / 16th Street",
        "block": "1500 to 1600 North",
        "choices": [
            "1500 to 1600 North",
            "3200 East",
            "300 North"
        ],
        "coords": [
            {
                "lat": 47.7114604,
                "lng": -116.9580959
            },
            {
                "lat": 47.7140016,
                "lng": -116.8724539
            }
        ]
    },
    {
        "name": "Mullan",
        "block": "800 North",
        "choices": [
            "800 North",
            "800 East",
            "6400 West"
        ],
        "coords": [
            {
                "lat": 47.7158831,
                "lng": -116.8943596
            },
            {
                "lat": 47.7157676,
                "lng": -116.96765900000001
            }
        ]
    },
    {
        "name": "Seltice",
        "block": "300-800 North",
        "choices": [
            "300-800 North",
            "3200 West",
            "800 North"
        ],
        "coords": [
            {
                "lat": 47.7054498,
                "lng": -116.850011
            },
            {
                "lat": 47.7021374,
                "lng": -117.04078670000001
            }
        ]
    },
    {
        "name": "1st Street",
        "block": "North / South marker. 1st is Zero",
        "choices": [
            "3200 West",
            "North / South marker. 1st is Zero",
            "2400 North"
        ],
        "coords": [
            {
                "lat": 47.7060363,
                "lng": -116.9481111
            },
            {
                "lat": 47.7060074,
                "lng": -116.93433520000002
            }
        ]
    },
    {
        "name": "1st Street",
        "block": "North and South Marker. 1st is Zero",
        "choices": [
            "East and West Marker. Spokane is Zero",
            "800 West",
            "North and South Marker. 1st is Zero"
        ],
        "coords": [
            {
                "lat": 47.7059496,
                "lng": -116.92622420000001
            },
            {
                "lat": 47.7060218,
                "lng": -116.91571000000002
            }
        ]
    },
    {
        "name": "1st Street",
        "block": "North / South Marker",
        "choices": [
            "North / South Marker",
            "800 North",
            "1500 East"
        ],
        "coords": [
            {
                "lat": 47.7054731,
                "lng": -116.9042945
            },
            {
                "lat": 47.7059641,
                "lng": -116.894381
            }
        ]
    },
    {
        "name": "3rd Ave",
        "block": "300 North",
        "choices": [
            "4800 East",
            "300 North",
            "6400 West"
        ],
        "coords": [
            {
                "lat": 47.7080858,
                "lng": -116.9478498
            },
            {
                "lat": 47.708028,
                "lng": -116.9156204
            }
        ]
    },
    {
        "name": "4th Ave",
        "block": "400 North",
        "choices": [
            "400 North",
            "4500 to 5800 East",
            "11100 North"
        ],
        "coords": [
            {
                "lat": 47.7109613,
                "lng": -116.9536175
            },
            {
                "lat": 47.7116665,
                "lng": -116.9291816
            }
        ]
    },
    {
        "name": "Lincoln St",
        "block": "500 East",
        "choices": [
            "400 North",
            "500 East",
            "1500 to 1600 North"
        ],
        "coords": [
            {
                "lat": 47.7119192,
                "lng": -116.940286
            },
            {
                "lat": 47.7059993,
                "lng": -116.9403396
            }
        ]
    },
    {
        "name": "Henry St",
        "block": "300 East",
        "choices": [
            "300 North",
            "300 East",
            "North and South Marker. 1st is Zero"
        ],
        "coords": [
            {
                "lat": 47.7119553,
                "lng": -116.943687
            },
            {
                "lat": 47.7059776,
                "lng": -116.943687
            }
        ]
    },
    {
        "name": "Midway Ave",
        "block": "1600 North",
        "choices": [
            "4500 to 5800 East",
            "1600 North",
            "North and South Marker. 1st is Zero"
        ],
        "coords": [
            {
                "lat": 47.7228066,
                "lng": -116.9909307
            },
            {
                "lat": 47.7245676,
                "lng": -116.9707176
            }
        ]
    },
    {
        "name": "12th Ave",
        "block": "1200 North",
        "choices": [
            "East and West Marker. Spokane is Zero",
            "1200 North",
            "North / South Marker"
        ],
        "coords": [
            {
                "lat": 47.719651,
                "lng": -116.958679
            },
            {
                "lat": 47.7192849,
                "lng": -116.8834743
            }
        ]
    },
    {
        "name": "Huetter",
        "block": "4800 East",
        "choices": [
            "2500 to 5500 West",
            "3200 West",
            "4800 East"
        ],
        "coords": [
            {
                "lat": 47.7052188,
                "lng": -116.8513843
            },
            {
                "lat": 47.7004047,
                "lng": -116.8510839
            }
        ]
    },
    {
        "name": "Maplewood Ave",
        "block": "4500 to 5800 East",
        "choices": [
            "4000 East",
            "4500 to 5800 East",
            "North / South marker. 1st is Zero"
        ],
        "coords": [
            {
                "lat": 47.7049391,
                "lng": -116.8967887
            },
            {
                "lat": 47.7007802,
                "lng": -116.8511268
            }
        ]
    },
    {
        "name": "Highway 41",
        "block": "4000 East",
        "choices": [
            "2300 West",
            "4000 East",
            "6400 West"
        ],
        "coords": [
            {
                "lat": 47.7109166,
                "lng": -116.8948746
            },
            {
                "lat": 47.7079714,
                "lng": -116.895158
            }
        ]
    },
    {
        "name": "Ross Point Rd",
        "block": "4000 East",
        "choices": [
            "11100 North",
            "4000 East",
            "300 North"
        ],
        "coords": [
            {
                "lat": 47.7077981,
                "lng": -116.8950721
            },
            {
                "lat": 47.7008668,
                "lng": -116.8943426
            }
        ]
    },
    {
        "name": "Ponderosa Blvd",
        "block": "2400 to 4000",
        "choices": [
            "2400 East",
            "1600 North",
            "2400 to 4000"
        ],
        "coords": [
            {
                "lat": 47.7015817,
                "lng": -116.9156554
            },
            {
                "lat": 47.7020672,
                "lng": -116.8944257
            }
        ]
    },
    {
        "name": "Riverbend Ave",
        "block": "2500 to 5500 West",
        "choices": [
            "300-800 North",
            "4000 West",
            "2500 to 5500 West"
        ],
        "coords": [
            {
                "lat": 47.6987096,
                "lng": -117.0231321
            },
            {
                "lat": 47.7104349,
                "lng": -116.9805172
            }
        ]
    },
    {
        "name": "Point Pkwy",
        "block": "5900 West",
        "choices": [
            "5800 West",
            "1200 North",
            "5900 West"
        ],
        "coords": [
            {
                "lat": 47.6995905,
                "lng": -117.0381525
            },
            {
                "lat": 47.6996194,
                "lng": -117.0178965
            }
        ]
    },
    {
        "name": "Baugh Way",
        "block": "6400 West",
        "choices": [
            "11100 North",
            "2300 West",
            "6400 West"
        ],
        "coords": [
            {
                "lat": 47.7069551,
                "lng": -117.0321014
            },
            {
                "lat": 47.7022332,
                "lng": -117.0280459
            }
        ]
    }
];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 47.7125, lng: -116.9510 },
        zoom: 12,
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
            container.innerHTML = `<strong>What is the 100-block for ${street.name}?</strong><br>`;
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
