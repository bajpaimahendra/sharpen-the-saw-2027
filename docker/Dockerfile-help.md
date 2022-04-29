	docker image -> is described in text file called a Dockerfile, which has a simple and well-defined syntax.

	Dockerfile   -> is a text document that contains commands that are used to assemble an image.

	Create Docker Image with image name -> 
		docker build -t image-name docker-file-location (-t : to tag Docker image with the provided name)
		docker build -t my-php-img -f ./Dockefile . (if Dockerfile in current dir)
		docker build -t my-php-img . (if Dockerfile in current dir)

	Dockerfile Instructions ->
		1- instructions are not case-sensitive but you must follow conventions which recommend to use uppercase.
		2- first instruction must be FROM in order to specify the Base Image.
		3- statement begin with # treated as a comment.

	FROM  -> is used to set the Base Image for the subsequent instructions. A valid Dockerfile must have FROM as its first instruction.
		FROM ubuntu:18.04

	LABEL -> add labels to an image to organize images of our project.
		LABEL vendorl = "JavaTpoint"  

	RUN -> This instruction is used to execute any command of the current image.
		RUN apt-get update && apt-get install -yq --no-install-recommends \
		    apt-utils \
		RUN apt-get install -y apache2
		RUN apt-get install -y libapache2-mod-php7.2
		RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

	CMD ->  This is used to execute application by the image, 
		There can be only one CMD in a Dockerfile. If we use more than one CMD, only last one will execute.
		CMD ["executable", "param1", "param2"?]  
		CMD apachectl -D FOREGROUND 

	COPY -> This instruction is used to copy new files or directories from source to the filesystem of the container at the destination.
		COPY typo3.conf /etc/apache2/sites-available/
		COPY . /var/www/html

	WORKDIR -> The WORKDIR is used to set the working directory for any RUN, CMD and COPY instruction that follows it in the Dockerfile.
		WORKDIR /var/www/html  