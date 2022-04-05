### Dockerfile is a set of instructions for building a Docker image (i.e., an Apache process, PHP-FPM, etc.). 
### Usually, your Dockerfiles will extend another image.
### Docker hub has official images for every flavor of Linux .

FROM php:7.1.8-apache

MAINTAINER Mahendra Kumar

# COPY . /var/www/html/vayuadmin
# COPY ./docker/vhost.conf /etc/apache2/sites-available/vayuadmin.local.conf
# COPY ./docker/php.ini /usr/local/etc/php/

COPY . /var/www/html
WORKDIR /var/www/html

# allow .htaccess from Apache
RUN a2enmod rewrite 

# enable virtual host
#RUN a2ensite vayuadmin.local

# Install php extension

# RUN docker-php-ext-install gd
# RUN docker-php-ext-install mbstring
# RUN docker-php-ext-install zip 
# RUN docker-php-ext-install mysqli 
# RUN docker-php-ext-install pdo
# RUN docker-php-ext-install pdo_mysql

RUN apt-get update && apt-get install -y \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng12-dev \
    libicu-dev \
     libxml2-dev \
    vim \
        wget \
        unzip \
        git \
    && docker-php-ext-install -j$(nproc) iconv intl xml soap mcrypt opcache mysqli pdo pdo_mysql mysqli mbstring \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd


# RUN chown -R 777 /var/www/html/vayuadmin/application/captcha
# RUN chmod -R 755 /var/www/html/vayuadmin/application/ci_sessions
 
# RUN chown -R www-data:www-data /var/www/html
# RUN a2enmod rewrite # allow .htaccess from Apache

CMD ["apache2-foreground"]
