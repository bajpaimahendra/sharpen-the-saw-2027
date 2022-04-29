#### Composer
	
		is dependency manager for php
		to install a specific library  and dependent library of parent library if needed.
		library and it's dependency will install inside 'vendor' directory

		Composer solves problem by keeping track same version of library dependencies for each developer in same project

		The composer.json file tells Composer which dependencies it needs to download for your project

		https://code.tutsplus.com/tutorials/what-is-composer-for-php-and-how-to-install-it--cms-35160 

		https://devhints.io/composer

#### install on linux and macOS

	$ curl -s https://getcomposer.org/installer | php

	$ sudo mv ./composer.phar /usr/bin/composer		 ( to use Composer globally )

#### check version

	$ composer --version

#### Packagist

	https://packagist.org/

	Packagist is a central repository from where Composer pulls libraries and its dependencies

#### Using Composer in a PHP Project

	$ cd /var/www/html/makeifly 				( go to project root )  

	$ composer show 					(  Show a list of the packages installed in this project )

	$ composer init 					(  creates an "empty" composer.json in current dir )

	SEARCH PACKAGE $ composer search package-name

		$ composer search laravel


	ADD PACKAGE $ composer require vendor-name/package-name

		Adds new packages to the composer.json file from the current directory.
		If no file exists one will be created on the fly. the modified requirements will be installed

		e.g.

		$ composer require cocur/slugify


	INSTALL DEPENDENCIES $ composer install

		Downloads and installs all the libraries and dependencies outlined in the composer.lock file. 
		If the file does not exist it will look for composer.json and do the same, creating a composer.lock file.

		Note : composer.lock should always be committed to the repository.
		       So other member will install the same version of library

		And you should add 'vender' dir to .gitignore


	REMOVE PACKAGE $ composer remove vendor-name/package-name  	

		Remove any specific package from your composer.json file 

	$ composer cc / composer clear-cache 			( clear all the cached packages  )


	UPDAGTE PACKAGE 

		update newer version of libraries defined in the composer.json file. The composer.lock file will be updated

		$ composer update  					Updates all packages

		$ composer update --with-dependencies 			Updates all packages and its dependencies








