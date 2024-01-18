FROM ubuntu:22.04

RUN apt update
RUN apt install nginx -y

WORKDIR /var/www/html

COPY . .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]