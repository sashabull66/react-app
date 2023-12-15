FROM nginx:latest
COPY ./build /var/www/example
COPY nginx.conf /etc/nginx
