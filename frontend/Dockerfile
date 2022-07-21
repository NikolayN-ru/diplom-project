FROM node:14-alpine

WORKDIR /app

ADD package*.json *

# RUN apt update && apt install -y vim
# RUN apt-get update

RUN npm i

COPY . .
