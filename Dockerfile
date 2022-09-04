FROM node:18.7.0-alpine3.16

RUN npm install -g http-server

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

ENTRYPOINT ["http-server", "dist"]