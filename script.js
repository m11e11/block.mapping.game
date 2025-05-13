let map;
let streets = [
    {
        "name": "Beck",
        "block": "5800 West",
        "choices": [
            "1500 East",
            "4000 East",
            "5800 West"
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
            "3200 West",
            "4000 West",
            "5800 West"
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
            "3200 West",
            "5800 West",
            "1500 East"
        ],
        "coords": [
            {
                "lat": 47.7452106,
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
            "2300 West",
            "2400 East",
            "3200 West"
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
            "800 West",
            "7200 East",
            "1500 East"
        ],
        "coords": [
            {
                "lat": 47.7614837,
                "lng": -116.9589043
            },
            {
                "lat": 47.7150747,
                "lng": -116.9585609
            }
        ]
    },
    {
        "name": "Spokane Street",
        "block": "0 (East/West Marker)",
        "choices": [
            "4000 West",
            "0 (East/West Marker)",
            "4000 East"
        ],
        "coords": [
            {
                "lat": 47.7453261,
                "lng": -116.9482613
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
            "5800 West",
            "800 East",
            "3200 East"
        ],
        "coords": [
            {
                "lat": 47.7847881,
                "lng": -116.9372749
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
            "1500 East",
            "3200 East",
            "5800 West"
        ],
        "coords": [
            {
                "lat": 47.7374185,
                "lng": -116.9265461
            },
            {
                "lat": 47.7160564,
                "lng": -116.9265461
            }
        ]
    },
    {
        "name": "Greensferry",
        "block": "2400 East",
        "choices": [
            "800 West",
            "5800 West",
            "2400 East"
        ],
        "coords": [
            {
                "lat": 47.8057761,
                "lng": -116.9113541
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
            "3200 East",
            "0 (East/West Marker)",
            "4000 East"
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
            "4000 East",
            "800 West",
            "3200 West"
        ],
        "coords": [
            {
                "lat": 47.7594066,
                "lng": -116.8941879
            },
            {
                "lat": 47.7109166,
                "lng": -116.8948746
            }
        ]
    },
    {
        "name": "Meyer",
        "block": "5500 East",
        "choices": [
            "4000 East",
            "5500 East",
            "1500 East"
        ],
        "coords": [
            {
                "lat": 47.7591758,
                "lng": -116.8729019
            },
            {
                "lat": 47.7231588,
                "lng": -116.8729019
            }
        ]
    },
    {
        "name": "Huetter Road",
        "block": "7200 East",
        "choices": [
            "7200 East",
            "4000 West",
            "800 West"
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
        "block": NaN,
        "choices": [
            NaN,
            "0 (East/West Marker)",
            "800 West"
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
        "block": NaN,
        "choices": [
            "2400 East",
            NaN,
            "5500 East"
        ],
        "coords": [
            {
                "lat": 47.7599836,
                "lng": -116.9805336
            },
            {
                "lat": 47.7591758,
                "lng": -116.8509293
            }
        ]
    },
    {
        "name": "Prairie",
        "block": NaN,
        "choices": [
            "5500 East",
            "2300 West",
            NaN
        ],
        "coords": [
            {
                "lat": 47.7454415,
                "lng": -117.0162392
            },
            {
                "lat": 47.7448643,
                "lng": -116.8509293
            }
        ]
    },
    {
        "name": "Poleline",
        "block": NaN,
        "choices": [
            "7200 East",
            NaN,
            "3200 East"
        ],
        "coords": [
            {
                "lat": 47.730318,
                "lng": -116.8512726
            },
            {
                "lat": 47.7308953,
                "lng": -117.0019913
            }
        ]
    },
    {
        "name": "15th / 16th Street",
        "block": NaN,
        "choices": [
            "2300 West",
            NaN,
            "4000 West"
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
        "block": NaN,
        "choices": [
            "800 West",
            "5800 West",
            NaN
        ],
        "coords": [
            {
                "lat": 47.7158831,
                "lng": -116.8943596
            },
            {
                "lat": 47.7157676,
                "lng": -116.967659
            }
        ]
    },
    {
        "name": "Seltice",
        "block": NaN,
        "choices": [
            NaN,
            "4000 West",
            "3200 West"
        ],
        "coords": [
            {
                "lat": 47.7054498,
                "lng": -116.850011
            },
            {
                "lat": 47.7021374,
                "lng": -117.0407867
            }
        ]
    },
    {
        "name": "1st Street",
        "block": NaN,
        "choices": [
            NaN,
            "3200 East",
            "2300 West"
        ],
        "coords": [
            {
                "lat": 47.7060363,
                "lng": -116.9481111
            },
            {
                "lat": 47.7060074,
                "lng": -116.9343352
            }
        ]
    },
    {
        "name": "1st Street",
        "block": NaN,
        "choices": [
            "1500 East",
            "3200 East",
            NaN
        ],
        "coords": [
            {
                "lat": 47.7059496,
                "lng": -116.9262242
            },
            {
                "lat": 47.7060218,
                "lng": -116.91571
            }
        ]
    },
    {
        "name": "1st Street",
        "block": NaN,
        "choices": [
            NaN,
            "7200 East",
            "3200 West"
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
        "block": NaN,
        "choices": [
            NaN,
            "4000 West",
            "7200 East"
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
        "block": NaN,
        "choices": [
            "4000 West",
            "5500 East",
            NaN
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
        "block": NaN,
        "choices": [
            "2400 East",
            "800 East",
            NaN
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
        "block": NaN,
        "choices": [
            "1500 East",
            NaN,
            "0 (East/West Marker)"
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
        "block": NaN,
        "choices": [
            "3200 East",
            NaN,
            "800 West"
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
        "block": NaN,
        "choices": [
            "2400 East",
            "800 West",
            NaN
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
        "block": NaN,
        "choices": [
            "3200 West",
            NaN,
            "4000 East"
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
        "block": NaN,
        "choices": [
            "2300 West",
            NaN,
            "800 East"
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
            "2400 East",
            "5800 West",
            "4000 East"
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
        "block": NaN,
        "choices": [
            "4000 West",
            "4000 East",
            NaN
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
        "block": NaN,
        "choices": [
            "5500 East",
            "3200 West",
            NaN
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
        "block": NaN,
        "choices": [
            NaN,
            "4000 West",
            "2400 East"
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
        "block": NaN,
        "choices": [
            NaN,
            "0 (East/West Marker)",
            "800 East"
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
        "block": NaN,
        "choices": [
            "7200 East",
            "4000 East",
            NaN
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
    },
    {
        "name": "Greensferry Elementary",
        "block": NaN,
        "choices": [
            NaN,
            "2400 East",
            "1500 East"
        ],
        "coords": [
            {
                "lat": 47.7375412,
                "lng": -116.9184458
            },
            {
                "lat": 47.7375412,
                "lng": -116.9184458
            }
        ]
    },
    {
        "name": "Prairie View Elementary School",
        "block": NaN,
        "choices": [
            "4000 East",
            NaN,
            "0 (East/West Marker)"
        ],
        "coords": [
            {
                "lat": 47.7303325,
                "lng": -116.9156992
            },
            {
                "lat": 47.7303325,
                "lng": -116.9156992
            }
        ]
    },
    {
        "name": "Ponderosa Elementary",
        "block": NaN,
        "choices": [
            "5800 West",
            "7200 East",
            NaN
        ],
        "coords": [
            {
                "lat": 47.7034371,
                "lng": -116.9000566
            },
            {
                "lat": 47.7034371,
                "lng": -116.9000566
            }
        ]
    },
    {
        "name": "Seltice Elementary",
        "block": NaN,
        "choices": [
            NaN,
            "5800 West",
            "3200 West"
        ],
        "coords": [
            {
                "lat": 47.7182652,
                "lng": -116.958636
            },
            {
                "lat": 47.7182652,
                "lng": -116.958636
            }
        ]
    },
    {
        "name": "Mullan Trail Elementary",
        "block": NaN,
        "choices": [
            NaN,
            "4000 East",
            "2300 West"
        ],
        "coords": [
            {
                "lat": 47.7196185,
                "lng": -116.9525957
            },
            {
                "lat": 47.7196185,
                "lng": -116.9525957
            }
        ]
    },
    {
        "name": "Fredrick Post Elementary",
        "block": NaN,
        "choices": [
            "800 West",
            "4000 East",
            NaN
        ],
        "coords": [
            {
                "lat": 47.7159589,
                "lng": -116.951732
            },
            {
                "lat": 47.7159589,
                "lng": -116.951732
            }
        ]
    },
    {
        "name": "West Ridge Elementary",
        "block": NaN,
        "choices": [
            NaN,
            "2300 West",
            "5800 West"
        ],
        "coords": [
            {
                "lat": 47.7254611,
                "lng": -116.9682705
            },
            {
                "lat": 47.7254611,
                "lng": -116.9682705
            }
        ]
    },
    {
        "name": "Post Falls Middle School",
        "block": NaN,
        "choices": [
            "2300 West",
            NaN,
            "3200 East"
        ],
        "coords": [
            {
                "lat": 47.7268107,
                "lng": -116.9452786
            },
            {
                "lat": 47.7268107,
                "lng": -116.9452786
            }
        ]
    },
    {
        "name": "Post Falls Jr. High School",
        "block": NaN,
        "choices": [
            "1500 East",
            NaN,
            "800 West"
        ],
        "coords": [
            {
                "lat": 47.7196366,
                "lng": -116.9525582
            },
            {
                "lat": 47.7196366,
                "lng": -116.9525582
            }
        ]
    },
    {
        "name": "River City Middle School",
        "block": NaN,
        "choices": [
            "3200 West",
            "4000 East",
            NaN
        ],
        "coords": [
            {
                "lat": 47.7271066,
                "lng": -116.9560289
            },
            {
                "lat": 47.7271066,
                "lng": -116.9560289
            }
        ]
    },
    {
        "name": "New Vision High School",
        "block": NaN,
        "choices": [
            NaN,
            "3200 West",
            "5500 East"
        ],
        "coords": [
            {
                "lat": 47.715995,
                "lng": -116.9504392
            },
            {
                "lat": 47.715995,
                "lng": -116.9504392
            }
        ]
    },
    {
        "name": "Post Falls High School",
        "block": NaN,
        "choices": [
            NaN,
            "3200 West",
            "4000 East"
        ],
        "coords": [
            {
                "lat": 47.7303252,
                "lng": -116.9133174
            },
            {
                "lat": 47.7303252,
                "lng": -116.9133174
            }
        ]
    },
    {
        "name": "Genesis Prep",
        "block": NaN,
        "choices": [
            "4000 West",
            "3200 West",
            NaN
        ],
        "coords": [
            {
                "lat": 47.7263281,
                "lng": -116.9033661
            },
            {
                "lat": 47.7263281,
                "lng": -116.9033661
            }
        ]
    },
    {
        "name": "St. Dominic's Girls School",
        "block": NaN,
        "choices": [
            "5800 West",
            "800 East",
            NaN
        ],
        "coords": [
            {
                "lat": 47.6866131,
                "lng": -117.0205213
            },
            {
                "lat": 47.6866131,
                "lng": -117.0205213
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
