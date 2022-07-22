FROM node:16.16

WORKDIR /app

ADD package*.json .

# RUN apt update && apt install -y vim
# RUN apt-get update

RUN npm install

COPY . .
