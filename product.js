let products = [
    [
        /*
        Produkt struktur
        [
            Products[0] - Unikt varenummer/ NUMBER,
            Products[1] - Produkt titel/ STRING,
            Products[2] - Tags/ ARRAY,
            Products[3] - Menu kategori(er)/ ARRAY,
            Products[4] - Størrelser/ ARRAY,
            Products[5] - Farver/ ARRAY,
            Products[6] - Beskrivelse/ STRING,
            Products[7] - Pris (uden moms)/ NUMBER,
            Products[8] - RABAT i % / NUMBER
            Products[9] - Produktbillede/ STRING
            Products[10] - Lagerstatus ( på lager eller udsolgt)/ BOOLEAN
            Products[11] - Featured Product - BOOLEAN

        ]
         */
        1,
        "Cardigan i kameluld",
        ["Bluser", "Strik", "Overdele"],
        ["Herretøj"],
        ["s", "m", "l", "xl", "xxl"],
        ["Sort", "Rød", "Brun", "Hvid"],
        "Lækker cardigan i eksklusiv kamelud",
        850,
        10,
        "images/1.jpg",
        true

    ],
    [
        2,
        "Festkjole",
        ["Kjoler", "Festtøj"],
        ["Dametøj"],
        ["xs", "s", "m", "l", "xl"],
        ["Sort", "Mørkerød", "Navy", "Hvid"],
        "Smuk og eksklusiv festkjole i akryl",
        700,
        0,
        "images/2.jpg",
        true
    ],
    [
        3,
        "Konfimationskjole",
        ["Kjoler", "Festtøj"],
        ["Dametøj", "Børnetøj"],
        ["xs", "s", "m", "l", "xl"],
        ["Hvid"],
        "Elegant konfirmationskjole i bommuld og akryl",
        1200,
        15,
        "images/3.jpg",
        true
    ],
    [
        4,
        "Turtleneck Sweater",
        ["Strik", "Overdele"],
        ["Dametøj"],
        ["xs", "s", "m", "l"],
        ["Sort", "Rosa", "Hvid", "Gul"],
        "Komfortabel sweater med høj hals",
        760,
        10,
        "images/4.jpg",
        true,
        true
    ],
    [
        5,
        "Rullekrave Sweater",
        ["Strik", "Overdele"],
        ["Herretøj"],
        ["xs", "s", "m", "l", "xl", "xxl"],
        ["Sort", "Orange", "Hvid", "Grå"],
        "Lækker sweater med høj hals",
        649,
        0,
        "images/5.jpg",
        false
    ],
    [
        6,
        "Heavy Duty T-shirt",
        ["T-shirts", "Overdele"],
        ["Herretøj"],
        ["xs", "s", "m", "l", "xl", "xxl"],
        ["Sort", "Hvid", "Blå"],
        "Slidstærk T-shirt i 100% bommuld",
        649,
        5,
        "images/6.jpg",
        true
    ],
    [
        7,
        "Slim fit Jeans",
        ["Bukser"],
        ["Herretøj"],
        ["s", "m", "l", "xl"],
        ["Sort", "Blå"],
        "Smarte Wrangler jeans der sidder perfekt",
        649,
        5,
        "images/7.jpg",
        true
    ]
]