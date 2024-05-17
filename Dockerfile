FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

ADD build /usr/share/nginx/html

RUN rm etc/nginx/conf.d/default.conf
COPY nginx.conf etc/nginx/conf.d/

# add non-root user
RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d

# non root users cannot listen on 80
EXPOSE 8080

USER nginx


COPY entrypoint.sh /entrypoint.sh

# Start Nginx server
ENTRYPOINT sh -c "./entrypoint.sh && nginx -g 'daemon off;'"
RUN chmod +x entrypoint.sh
