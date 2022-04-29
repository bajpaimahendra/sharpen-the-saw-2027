#### NPM (Node Package Manager)

		1- will automatically install with Node

		2- used to install packages/modules and its dependency

		3- used to search and install  which are available on search.nodejs.org

		npm  version ( check version of npm )

#### Installing Modules using npm

		npm install <Module Name>
		e.g.
		npm install express ( install a famous Node.js web framework called express: )  

#### Global vs Local Installation

	1- By default, npm installs dependency in local mode.

	2- it created node_modules directory in the current directory.

	3 - $ npm install <Module Name> -g  
		( Globally installed packages/dependencies are stored in system directory.)

	4-  $ npm ls 
		( command to list down all the locally installed modules.)

	5-$ npm list -g --depth=0 
		( ist all package which are installed globally )

#### Uninstalling a Module

		1- $ npm uninstall <Module Name>
			e.g.
			$ npm uninstall express 

		2- $ npm uninstall -g <packageName>	

#### Searching a Module
		npm search <Module Name> ( search on nodejs.org )
		e.g.
		npm search express

#### package.json

		$ npm init 	(to initialize package.json in curreint directory )
		$ npm install  <moduleName> --save	( -- save write in package.json if not alaready available )
			e.g. $ npm express install --save
			$ npm install express 	( install express 3.0 module globally) 
			$ sudo apt install node-express-generator	( install express 4.0 module globally for each node project)
	 
	express <ProjectName> ( create project and package.json through express global module)

	$ npm install