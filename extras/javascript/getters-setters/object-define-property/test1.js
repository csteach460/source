/*
* getters and setters - basic - object.defineProperty - test1.js
* - basic test of custom object property
* - *private* object property
* - custom getter and setter for property
*/

// constructor for Planets object
function Planets() {

	// mimick private variable usage...
	const _names = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
	// const _codes = {
	// 	iau: ['Me', 'V', 'E', 'Ma', 'J', 'S', 'U', 'N'],
	// 	unicode: ['U+263F', 'U+2640', 'U+2641', 'U+2642', 'U+2643', 'U+2644', 'U+2645', 'U+2646']
	// };

	Object.defineProperty(this, 'names',  {
		get: () => {
			return _names;
		},
		set: value => {
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

// use setter to update array values - push new planet name
planets.names = 'alpha centauri'

// use getter to retrieve updated array of names
console.log(planets.names);