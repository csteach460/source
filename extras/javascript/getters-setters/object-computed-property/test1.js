/*
* getters and setters - basic - object computed property - test1.js
* - basic test of computed property
* - *private* object property
* - custom getter and setter for property
* - validate property values...
*/

// constructor for Planets object
function Planets() {

	// mimick private variable usage...
	const _names = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
	const _codes = {
		iau: ['Me', 'V', 'E', 'Ma', 'J', 'S', 'U', 'N'],
		unicode: ['U+263F', 'U+2640', 'U+2641', 'U+2642', 'U+2643', 'U+2644', 'U+2645', 'U+2646']
	};

	Object.defineProperty(this, 'details',  {
		get: () => {
			const planetDetails = {
				names: _names,
				codes: _codes
			};
			return planetDetails;
		},
		set: value => {
			// check value passed is a string
			if (typeof value !== 'string') {
				throw new TypeError('planet name needs to be a String value...');
			}
			_names.push(value);
		}
	});

}

// test usage for Planets and *private* variable access
const planets = new Planets();

// returns undefined for _names variable
console.log('value for direct access to private variable = ', planets._names);

// use getter to retrieve computed property value - names & codes
console.log('computed value = ', planets.details);

// use setter to update array values - push new planet name as number to test type validation
planets.details = 'alpha centauri';

// use getter to retrieve updated array of names
console.log(planets.details);