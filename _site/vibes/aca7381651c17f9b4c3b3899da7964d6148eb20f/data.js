var APP_DATA = {
  "scenes": [
    {
      "id": "0-main-door",
      "name": "Main Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6567304439876587,
          "pitch": 0.19537453848150932,
          "rotation": 6.283185307179586,
          "target": "1-living-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.19315761309005453,
          "pitch": -0.4223831178295754,
          "title": "Welcome!",
          "text": "<div>Hello! This is an interactive 3D tour of the new home of Shameer &amp; Sherbeeni Sam, VIBES!</div><div><br></div>We realize due to current world events a lot of you wouldn't be able to make it here, though we hope to host you soon! Meanwhile, we hope you enjoy this interactive look at our home!<br>"
        }
      ]
    },
    {
      "id": "1-living-hall",
      "name": "Living Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 941,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6669347544100663,
          "pitch": 0.0867659393278899,
          "rotation": 11.780972450961727,
          "target": "4-downstairs"
        },
        {
          "yaw": 0.43623160919819526,
          "pitch": 0.2748750035943637,
          "rotation": 7.0685834705770345,
          "target": "3-back-garden"
        },
        {
          "yaw": -1.3035743559103548,
          "pitch": 0.20924889234814437,
          "rotation": 0,
          "target": "2-zen-garden"
        },
        {
          "yaw": -2.428500454239,
          "pitch": 0.15165463553283942,
          "rotation": 4.71238898038469,
          "target": "0-main-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-zen-garden",
      "name": "Zen Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3438815529739312,
          "pitch": -0.0018249403510139928,
          "rotation": 0,
          "target": "1-living-hall"
        },
        {
          "yaw": -1.0996389295097249,
          "pitch": 0.02004561755672185,
          "rotation": 12.566370614359176,
          "target": "4-downstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-back-garden",
      "name": "Back Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5599429453400724,
          "pitch": 0.022382200540608466,
          "rotation": 4.71238898038469,
          "target": "1-living-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-downstairs",
      "name": "Downstairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 941,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1480335186079547,
          "pitch": 0.0928213200662924,
          "rotation": 0,
          "target": "5-dining-hall"
        },
        {
          "yaw": 0.8083105032636073,
          "pitch": 0.3389328037872872,
          "rotation": 7.0685834705770345,
          "target": "1-living-hall"
        },
        {
          "yaw": 0.1649785575852043,
          "pitch": 0.2514246889742342,
          "rotation": 18.84955592153877,
          "target": "8-guest-bathroom"
        },
        {
          "yaw": -0.6327317803622989,
          "pitch": 0.29219116786634913,
          "rotation": 5.497787143782138,
          "target": "15-downstairs-bedroom"
        },
        {
          "yaw": -0.12491422081868286,
          "pitch": 0.07333055343434758,
          "rotation": 0,
          "target": "9-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dining-hall",
      "name": "Dining Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 941,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.39599239870678105,
          "pitch": 0.01021984199678272,
          "rotation": 1.5707963267948966,
          "target": "6-counter"
        },
        {
          "yaw": 2.2611454594178904,
          "pitch": 0.4132270770800961,
          "rotation": 18.06415775814132,
          "target": "4-downstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-counter",
      "name": "Counter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 941,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.048227828567814,
          "pitch": 0.1378057472151859,
          "rotation": 4.71238898038469,
          "target": "7-kitchen"
        },
        {
          "yaw": 2.139373811864293,
          "pitch": 0.3831152045618609,
          "rotation": 5.497787143782138,
          "target": "5-dining-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 941,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.11319761828295505,
          "pitch": 0.14899613557356517,
          "rotation": 1.5707963267948966,
          "target": "6-counter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-guest-bathroom",
      "name": "Guest Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.649242024233402,
          "pitch": -0.0758028378045239,
          "rotation": 1.5707963267948966,
          "target": "4-downstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-upstairs",
      "name": "Upstairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5885114581026674,
          "pitch": 0.44291219573335106,
          "rotation": 5.497787143782138,
          "target": "4-downstairs"
        },
        {
          "yaw": -0.23912919487331763,
          "pitch": 0.01061492276810938,
          "rotation": 6.283185307179586,
          "target": "10-top-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-top-hallway",
      "name": "Top Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1084766557988344,
          "pitch": 0.19768992701702182,
          "rotation": 0,
          "target": "11-guest-room-entrance"
        },
        {
          "yaw": -0.47613110448426,
          "pitch": 0.2625974917620102,
          "rotation": 4.71238898038469,
          "target": "14-pool"
        },
        {
          "yaw": 0.446251507769432,
          "pitch": 0.49848372971226773,
          "rotation": 13.351768777756625,
          "target": "9-upstairs"
        },
        {
          "yaw": -0.11994203725119235,
          "pitch": 0.15931715215853615,
          "rotation": 0,
          "target": "17-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-guest-room-entrance",
      "name": "Guest Room Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0883260367110887,
          "pitch": 0.2326160203901093,
          "rotation": 0,
          "target": "10-top-hallway"
        },
        {
          "yaw": 0.18600213144797095,
          "pitch": 0.10064233108483833,
          "rotation": 6.283185307179586,
          "target": "12-guest-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-guest-room",
      "name": "Guest Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.36445548430165786,
          "pitch": -0.10902237766263312,
          "rotation": 6.283185307179586,
          "target": "11-guest-room-entrance"
        },
        {
          "yaw": 0.5672232733519511,
          "pitch": -0.1070449260725912,
          "rotation": 1.5707963267948966,
          "target": "13-guest-room-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-guest-room-bathroom",
      "name": "Guest Room Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.017300605969115423,
          "pitch": 0.23781944651776854,
          "rotation": 4.71238898038469,
          "target": "12-guest-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-pool",
      "name": "Pool",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9979863696101585,
          "pitch": 0.7102122092895158,
          "rotation": 5.497787143782138,
          "target": "10-top-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-downstairs-bedroom",
      "name": "Downstairs bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8310231583974712,
          "pitch": 0.22328002775658717,
          "rotation": 6.283185307179586,
          "target": "4-downstairs"
        },
        {
          "yaw": 1.79525121949027,
          "pitch": 0.12212894011311803,
          "rotation": 7.853981633974483,
          "target": "16-db-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-db-bathroom",
      "name": "DB Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9553705171644324,
          "pitch": 0.3024312969974723,
          "rotation": 0,
          "target": "15-downstairs-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-master-bedroom",
      "name": "Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0588097314367833,
          "pitch": 0.039560504392195384,
          "rotation": 0,
          "target": "10-top-hallway"
        },
        {
          "yaw": -0.17196468072944526,
          "pitch": 0.27376621099971565,
          "rotation": 1.5707963267948966,
          "target": "18-mb-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-mb-bathroom",
      "name": "MB Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.065558047842023,
          "pitch": 0.11945968534246632,
          "rotation": 4.71238898038469,
          "target": "17-master-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
