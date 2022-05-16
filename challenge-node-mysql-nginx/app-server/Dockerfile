FROM nginx:1.15-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

RUN mkdir /var/www/app -p && touch /var/www/app/index.html