FROM node:14-alpine

RUN apk add --update nginx

RUN mkdir -p /var/log/nginx
RUN mkdir -p /var/www/html

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /var/www/html

COPY dist .

RUN chown nginx:nginx /var/www/html

# start nginx and keep the process from backgrounding and the container from quitting
CMD ["nginx", "-g", "daemon off;"]