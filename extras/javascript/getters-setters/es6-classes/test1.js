/*
* getters and setters - basic - es6 classes - test1.js
* - basic test of es6 classes
* - using getter and setter method
* - getters return first planet added & latest planet added
* - setter adds a new planet to the `names` array property...
*/

class Planets {
	// default values for instantiated object
	constructor() {
		this.planets = {
			names: ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'],
			codes: {
				iau: ['Me', 'V', 'E', 'Ma', 'J', 'S', 'U', 'N'],
				unicode: ['U+263F', 'U+2640', 'U+2641', 'U+2642', 'U+2643', 'U+2644', 'U+2645', 'U+2646']
			}
		};
	}
	// getter method - first planet data
	get firstPlanet() {
		const planetDetails = {
			name: this.planets['names'][0],
			codes: {
				iau: this.planets['codes']['iau'][0],
				unicode: this.planets['codes']['unicode'][0]
			}
		};
		return planetDetails;
	}
	// getter method - latest planet data
	get latestPlanet() {
		const last = this.planets['names'].length-1;
		const planetDetails = {
			name: this.planets['names'][last],
			codes: {
				iau: this.planets['codes']['iau'][last],
				unicode: this.planets['codes']['unicode'][last]
			}
		};
		return planetDetails;
	}
	// setter method - new planet data pushed to end of data
	set planet(value) {
		this.planets['names'].push(value[0]);
		this.planets['codes']['iau'].push(value[1]);
		this.planets['codes']['unicode'].push(value[2]);
	}
}

// instantiate planets object
const planets = new Planets();

// add new planet using setter method
planets.planet = ['alpha centauri', 'ac', 'N/A'];

// output first planet using getter method - get firstPlanet
console.log(planets.firstPlanet);
// output latest planet data
console.log(planets.latestPlanet);