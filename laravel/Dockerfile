FROM php:7-apache
MAINTAINER Tom Clarkson "tom@fergusapp.com"

RUN apt-get update
RUN apt-get install -y git git-core \
                        libmcrypt-dev \
                        php5-dev \
                        libpng12-dev \
                        libfreetype6-dev \
                        libjpeg62-turbo-dev
RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include
RUN docker-php-ext-install mcrypt mbstring zip gd pdo_mysql

# install composer globally and laravel installer
RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer

RUN a2enmod rewrite

WORKDIR /var/www/laravel-app

# Configure composer with github token to remove API limitation
# ENV GITHUB_TOKEN dummy93f69a65f17194a83a14bd9723ce97d8b9b6
# RUN composer global config github-oauth.github.com $GITHUB_TOKEN

#RUN composer install;

#RUN php artisan route:scan;

#RUN php artisan cache:clear;

#RUN php artisan migrate --force;
