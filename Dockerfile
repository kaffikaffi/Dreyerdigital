FROM nginx
COPY ./package*.json ./packages/
RUN apk add --update nodejs && apk add --update nodejs-npm
RUN npm install
RUN npm run build
COPY ./dist /usr/share/nginx/html
