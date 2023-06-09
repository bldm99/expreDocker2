FROM node:10

WORKDIR /app/src/app

COPY package*.json ./

RUN  npm install

COPY . .


EXPOSE 9000
CMD ["node" , "app.js"]