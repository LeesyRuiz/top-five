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
practice_area: function(idx) {
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


  var schoolData = [
    {
      "id": 0,
      "practice_area": "Business",
      "name": "Georgetown University Law Center",
      "lat": 38.8978,
      "lng": -77.0129,
      "avvo_rating": 7.8,
      "client_rating": 4.9,
      "blurb": "Tradition. Innovation. A superb faculty, hundreds of course offerings — and all of this just steps away from the Capitol and Supreme Court. Georgetown Law is an exceptional institution in an enviable location."
    },
    {
      "id": 1,
      "practice_area": "Business",
      "name": "University of Florida, Fredric G. Levin College of Law",
      "lat": 29.6495,
      "lng": -82.359,
      "avvo_rating": 6.9,
      "client_rating": 4.8,
      "blurb": " The University of Florida Levin College of Law’s has a well-earned reputation as the best law school in Florida and a swiftly rising force on the national scene.  UF Law offers several different types of degrees including J.D., LL.M., and the nation’s first S.J.D. in taxation."
    },
    {
      "id": 2,
      "practice_area": "Business",
      "name": "New York University School of Law",
      "lat": 40.7305,
      "lng": -73.9995,
      "avvo_rating": 8,
      "client_rating": 5,
      "blurb": "NYU Law is an intellectual powerhouse, with 106 faculty, 317 courses, 15 areas of study, over 30 centers, and over 80 student organizations."
    },
    {
      "id": 3,
      "practice_area": "Business",
      "name": "University of Miami School of Law",
      "lat": 25.7192,
      "lng": -80.2771,
      "avvo_rating": 7.3,
      "client_rating": 4.7,
      "blurb": "Nestled into one of South Florida's loveliest locales – the lush, elegant enclave of Coral Gables – Miami Law vividly reflects the one-of-a-kind metro area it calls home. The student body is one of the nation's most diverse, coming to us from across the U.S. and six continents."
    },
    {
      "id": 4,
      "practice_area": "Business",
      "name": "University of Michigan Law School",
      "lat": 42.2743,
      "lng": -83.7401,
      "avvo_rating": 8.9,
      "client_rating": 4.6,
      "blurb": "The University of Michigan Law School in Ann Arbor is one of the world’s finest institutions of legal education. Housed in the Cook Quadrangle on the University of Michigan’s central campus, the Law School is unmatched for beauty and is superbly functional for its residential and scholarly community."
    }
]
