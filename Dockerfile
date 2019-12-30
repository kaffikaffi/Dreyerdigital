FROM nginx
COPY ./package*.json /packages
RUN npm install
RUN npm run build
COPY ./dist /usr/share/nginx/html
