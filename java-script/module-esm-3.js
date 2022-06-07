/*
	https://www.javascripttutorial.net/es6/es6-modules/

	https://javascript.info/modules-intro (examples for browser)
	https://javascript.info/import-export (examples for Node)

*/



import { user } from './utils/message.js'

const h3 = document.createElement('h3');
h3.textContent = JSON.stringify(user);  // convert object into a string

document.body.appendChild(h3)



console.log(user);