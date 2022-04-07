#### docker-compose
	
	1- utility to run multiple containers as a single service.
	2- Each of the containers here run in isolation but can interact with each other when required.
	3- Docker Compose files are very easy to write in a scripting language called YAML.
	4- Docker Compose is that users can activate all the services (containers) using a single command.
	5- Docker Compose can manage multi-container applications on a single machine only. 
	   It does not work on computer clusters, accross multiple machines.
	6- Docker Swarm, another Docker product, is designed to manage multi-container application stacks on computer clusters. You can use Docker Swarm to deploy and run your stack accross multiple machines.

#### Install Docker Compose


	https://docs.docker.com/compose/install/

	$ docker-compose --version		( Test the installation. )


	https://takacsmark.com/docker-compose-tutorial-beginners-by-example-basics/ (docker-compose.yml)
	https://blog.codeship.com/orchestrate-containers-for-development-with-docker-compose/

#### portainer

	https://www.howtoforge.com/tutorial/ubuntu-docker-portainer/
	https://www.linuxtechi.com/monitor-manage-docker-containers-portainer-part1/

#### Reference (Further Reading )

	https://www.educative.io/blog/docker-compose-tutorial
	https://gabrieltanner.org/blog/docker-compose

#### Docker Compose commands

	$ cd /var/www/docker-php-app-2

	$ docker-compose build 				only builds the images in docker-compose.yml, does not start the containers

	$ docker-compose up 				builds the images if the images do not exist and starts the containers
	$ docker-compose up --build 		forced to build the images even when not needed
	$ docker-compose up --no-build  	skips the image build process	
	$ docker-compose up -d 				run your services in the background -d flag  “detached” mode

	$ docker-compose down  				Stop and remove the containers
	$ docker-compose down -v 			delete the named volumes by passing the -v parameter

	$ docker-compose run web			create containers from images  for a service mentioned in the compose file
	$ docker-compose stop 				stops the running containers of specified services

	$ docker-compose ps 	 			to see what is currently running containers



	Navigate to http://localhost:8080 in your web browser

	OR 

	$ curl localhost:8080
