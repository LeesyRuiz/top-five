/*
    * The marker data will need to match this structre to work
    * To filter upon a specific key it needs to be hooked up in the filter section
        of the myMap object

    This data was generated from http://www.json-generator.com/


    Here is the source for generating the JSON

    // start
    [
        '{{repeat(150)}}',
        {
            id: '{{index}}',
            name: '{{firstName}} {{surname}}',
            age: '{{numeric(20,85)}}',
            followers: '{{numeric(8,80)}}',
            occupation: '{{lorem(2)}}',
            from: 'Michigan',
            college: function(idx) {
                var choices = ['MSU', 'MTU', 'UM', 'CMU', 'FSU'];
                return choices[idx.numeric(0, choices.length - 1)];
            },
            lat: '{{numeric(31.969639, 43.849384)}}',
            lng: '{{numeric(-120.629883, -77.387695)}}'
        }
    ]
    // finish

*/

        //
        // <option value="bankruptcydebt">Bankruptcy & Debt</option>
        // <option value="business">Business</option>
        // <option value="criminaldefense">Criminal Defense</option>
        // <option value="employmentlabor">Employment & Labor</option>
        // <option value="estateplanning">Estate Planning</option>
        // <option value="family">Family</option>
        // <option value="immigration">Immigration</option>
        // <option value="personalinjury">Personal Injury</option>
        // <option value="realestate">Real Estate</option>

var personData = [
    {
        "id": 0,
        "name": "Dianne Booker",
        "practice_area": "bankruptcydebt",
        "age": 36,
        "followers": 21,
        "occupation": "est ipsum",
        "from": "Michigan",
        "college": "personalinjury",
        "lat": 42.05285,
        "lng": -85.435034
    },
    {
        "id": 1,
        "name": "Walter Hickman",
        "practice_area": "bankruptcydebt",
        "age": 29,
        "followers": 57,
        "occupation": "cupidatat et",
        "from": "Michigan",
        "college": "realestate",
        "lat": 42.716753,
        "lng": -84.837778
    },
    {
        "id": 2,
        "name": "Jacklyn Church",
        "practice_area": "bankruptcydebt",
        "age": 56,
        "followers": 64,
        "occupation": "veniam incididunt",
        "from": "Michigan",
        "college": "immigration",
        "lat": 41.901165,
        "lng": -85.072451
    },
    {
        "id": 3,
        "name": "Kathie Guthrie",
        "practice_area": "estateplanning",
        "age": 37,
        "followers": 62,
        "occupation": "reprehenderit dolor",
        "from": "Michigan",
        "college": "family",
        "lat": 42.92877,
        "lng": -85.280188
    },
    {
        "id": 4,
        "name": "Megan Stout",
        "practice_area": "estateplanning",
        "age": 51,
        "followers": 48,
        "occupation": "laboris non",
        "from": "Michigan",
        "college": "estateplanning",
        "lat": 43.002451,
        "lng": -85.325883
    },
    {
        "id": 5,
        "name": "Stout Byrd",
        "age": 24,
        "followers": 39,
        "occupation": "reprehenderit id",
        "from": "Michigan",
        "college": "business",
        "lat": 43.500591,
        "lng": -84.793887
    },
    {
        "id": 6,
        "name": "Hayes Ramirez",
        "age": 41,
        "followers": 27,
        "occupation": "mollit in",
        "from": "Michigan",
        "college": "business",
        "lat": 43.157192,
        "lng": -85.44072
    },
    {
        "id": 7,
        "name": "Kathleen Walsh",
        "age": 67,
        "followers": 38,
        "occupation": "do sunt",
        "from": "Michigan",
        "college": "bankruptcydebt",
        "lat": 42.090924,
        "lng": -85.256757
    },
    {
        "id": 8,
        "name": "Concetta Erickson",
        "age": 55,
        "followers": 50,
        "occupation": "nostrud proident",
        "from": "Michigan",
        "college": "bankruptcydebt",
        "lat": 42.388535,
        "lng": -85.914563
    },
    {
        "id": 9,
        "name": "Gwen Pittman",
        "age": 43,
        "followers": 75,
        "occupation": "aliqua est",
        "from": "Michigan",
        "college": "bankruptcydebt",
        "lat": 42.45441,
        "lng": -83.699553
    }
]
