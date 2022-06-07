/*
	https://www.javascripttutorial.net/es6/es6-modules/

	- module is a JavaScript file that executes in strict mode only
	- means that any variables or functions declared in the module won’t be added automatically to the global scope.
*/

//module.exports message = 'ES6 Modules.........';

export let msg = 'Welcome ES6 Modules .........';
export let user = {
	first_name:'Mahenera',
	last_name: 'Bajpai'

};

export function show(message) {
    alert(message);
}

export function hide(message) {
    console.log('Hide it...');
}


