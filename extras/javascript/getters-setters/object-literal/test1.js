/*
* getters and setters - basic - object literal - test1.js
* - basic test of property access for object literal
* - using getter and setter method
* - getters return first planet added & latest planet added
* - setter adds a new planet to the `names` array property...
*/

const planets = {
	names: ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'],
	codes: {
		iau: ['Me', 'V', 'E', 'Ma', 'J', 'S', 'U', 'N'],
		unicode: ['U+263F', 'U+2640', 'U+2641', 'U+2642', 'U+2643', 'U+2644', 'U+2645', 'U+2646']
	},
	get firstPlanet() {
		const planetDetails = {
			name: this.names[0],
			codes: {
				iau: this.codes['iau'][0],
				unicode: this.codes['unicode'][0]
			}
		};
		return planetDetails;
	},
	get latestPlanet() {
		const last = this.names.length-1;
		const planetDetails = {
			name: this.names[last],
			codes: {
				iau: this.codes['iau'][last],
				unicode: this.codes['unicode'][last]
			}
		};
		return planetDetails;
	},
	set planet(value) {
		this.names.push(value[0]);
		this.codes['iau'].push(value[1]);
		this.codes['unicode'].push(value[2]);
	}
};

console.log(planets.firstPlanet);
console.log(planets.latestPlanet);

planets.planet = ['alpha centauri', 'ac', 'N/A'];

console.log(planets.latestPlanet);