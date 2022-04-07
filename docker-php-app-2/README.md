1- cd /var/www/docker-php-app-2

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


