/*
* getters and setters - basic - object.defineProperty - test2.js
* - basic test of custom object property
* - *private* object property
* - custom getter and setter for property
* - validate property values...
*/

// constructor for Planets object
function Planets() {

	// mimick private variable usage...
	const _names = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

	Object.defineProperty(this, 'names',  {
		get: () => {
			return _names;
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
console.log(planets._names);

// use getter to retrieve array of names
console.log(planets.names);

// use setter to update array values - push new planet name as number to test type validation
planets.names = 1252389;

// use getter to retrieve updated array of names
console.log(planets.names);