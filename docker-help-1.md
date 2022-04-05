#### Docker is a container(virtural machine) management tool.

#### Why Use Docker

	https://ropenscilabs.github.io/r-docker-tutorial/01-what-and-why.html
	https://www.youtube.com/watch?v=wi-MGFhrad0&list=PLhW3qG5bs-L99pQsZ74f-LC-tOEsBp2rK&pbjreload=10

#### Installation

	https://phoenixnap.com/kb/how-to-install-docker-on-ubuntu-18-04#ftoc-heading-3
	https://www.tecmint.com/install-docker-and-run-docker-containers-in-ubuntu/
	https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04
	https://docs.docker.com/install/linux/docker-ce/ubuntu/

	$ docker --version
	$ docker info


#### run docker commands without sudo

	1- sudo groupadd docker
	2- sudo usermod -aG docker $USER
	3- restart system / Log out and log back in so that your group membership is re-evaluated.
	4- Verify that you can run docker commands without sudo.

#### Reference (Further Reading )

	https://semaphoreci.com/community/tutorials/dockerizing-a-php-application

	https://dev.to/johnmccuk/isolating-php-with-docker-containers-4epn

	https://www.javatpoint.com/docker-php-example

	https://docs.docker.com/samples/library/php/

	https://www.tecmint.com/install-apache-web-server-in-a-docker-container/


	https://bitpress.io/simple-approach-using-docker-with-php/ ( ** )
	https://alysivji.github.io/php-mysql-docker-containers.html
	https://github.com/t3kit/ubuntu18.04-php7.2-apache/blob/master/Dockerfile ( ** )
	https://tech.mybuilder.com/virtual-hosts-with-docker/ ( ** )

	https://www.javatpoint.com/docker-php-example ( ** )

#### Dockerfile is a set of instructions for building a Docker image (i.e., an Apache process, PHP-FPM, etc.).



#### Create the image by docker build command:

cd /var/www/docker-php-app-1    ( docker-php-app-1 is a project directory )

Method 1- If all the code and  Dockerfile in current directory , image name will be same as project dir

		$ docker build . 

Method 2- If all the code and  Dockerfile in current directory , with image name

		$ docker build . -t my-php-img  /  $ docker build -t my-php-img . 

Method 3- If your Dockerfile is in another folder

		$ docker build . -t my-web-app -f subfolder/Dockerfile	

		$ docker build . -t my-php-img -f docker/Dockerfile


#### Run the image by docker run command
	Method 1- (need to rebuild image , if change in code)

		 $ docker run my-php-img

		 Application is running on http://172.17.0.2/

		 OR

		 $ docker run --rm -p 8080:80 my-php-img	

		 Application is running on http://172.17.0.2/ AND http://localhost:8080/

	Method 2- Mount Your Code Directory Into the Container ( No need build again, if change in code )

		 $ docker run -v /var/www/docker-php-app-1:/var/www/html my-php-img

		 OR

		 $ docker run --mount "type=bind,source=/var/www/docker-php-app-1,target=/var/www/html" my-php-img

		 Application is running on http://172.17.0.2/

		 OR

		 $ docker run -p 8080:80 --mount "type=bind,source=/var/www/docker-php-app-1,target=/var/www/html" my-php-img

		 Note : if option -p 8080:80 is provided, apache port 80 is mapped with 8080

		 Application is running on http://localhost:8080/

		 OR

		 $ nohup docker run -v /var/www/docker-php-app-1:/var/www/html my-php-img & (run image in background )


#### Image Management
	 
	$ docker build . -t  <IMAGE NAME>  -f subfolder/Dockerfile		Build Docker Image from a Dockerfile
	$ docker run -d <IMAGE NAME>  			      Run Docker Image (-d : It is used to create a daemon process)
	$ docker images                        		  List all the  images including downloaded to your machine
	$ docker rmi <IMAGE ID>                       Remove Docker Image
	$ docker rmi  $(docker images -q)             Remove All Images 


#### Container Management (container is a running instance of a image)

	$ docker ps -a / docker container ls -a                 List all container
	$ docker rm <CONTAINER ID>	                      		Remove Docker Container
	$ docker rm $(docker ps -a -q)                          Remove All Containers
	$ docker stop $(docker ps -a -q)                        Stop All Containers
	$ docker start <CONTAINER ID>
	$ docker container stop 86db764cdfd6 					stop a container 
	$ docker logs -f <CONTAINER ID>

	$ docker exec -it <CONTAINER ID> bash                   Enter into a Docker container

	$ docker-compose up / docker-compose up --build









