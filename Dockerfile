FROM node:22.11.0-alpine

WORKDIR /usr/src/api

COPY ./backend .

RUN yarn install --quiet --loglevel=error

RUN yarn run build

RUN apk update &&\
    apk upgrade &&\ 
    apk add bash

EXPOSE 3000