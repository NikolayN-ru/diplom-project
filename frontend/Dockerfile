FROM node:14-alpine

WORKDIR /app

# ADD package.json .
ADD package.json /app/package.json

# RUN apt update && apt install -y vim
# RUN apt-get update

RUN npm i

# ADD . .
COPY . /app
