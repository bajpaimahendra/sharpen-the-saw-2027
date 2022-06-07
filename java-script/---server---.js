

var express = require('express');
var app = express();
//app.use(express.static(__dirname + '/public')); //__dir and not _dir
app.use(express.static(__dirname)); //__dir and not _dir

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port);
console.log(`Server running at http://${hostname}:${port}/`);





/* ****
	npm install express

	http://127.0.0.1:3000/module.html
*/