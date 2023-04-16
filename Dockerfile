FROM node:14-alpine

WORKDIR /app

COPY index.js package*.json ./templates ./database .

RUN apk add --update nodejs
RUN apk add --update npm
RUN npm install express
RUN npm install express-handlebars
RUN npm install nodemon

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
