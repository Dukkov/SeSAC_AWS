FROM ubuntu:22.04

RUN apt update
RUN apt install nginx -y
RUN echo "<meta charset=utf8>" > /var/www/html/index.nginx-debian.html \
    echo "<h1>This is my first docker 웹페이지</h1>" >> /var/www/html/index.nginx-debian.html \
    echo "<h2>이것은 나의 홈페이지입니다.</h2>" >> /var/www/html/index.nginx-debian.html

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]