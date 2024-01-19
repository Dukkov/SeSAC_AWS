FROM nginx

COPY index.html /usr/share/nginx/html/index.html
COPY sesac /etc/nginx
COPY nginx.conf /etc/nginx

ENTRYPOINT [ "nginx", "-g", "daemon off;"]