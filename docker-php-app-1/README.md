1- cd /var/www/docker-php-app-1

2- Build Image with name my-php-img

		docker build . -t my-php-img -f docker/Dockerfile

3- Run Image my-php-img

		docker run -p 8080:80 --mount "type=bind,source=/var/www/docker-php-app-1,target=/var/www/html" my-php-img

4- Application is running on

		http://172.17.0.2/

		http://localhost:8080/
