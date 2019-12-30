FROM nginx
RUN npm run build
COPY ./dist /usr/share/nginx/html
