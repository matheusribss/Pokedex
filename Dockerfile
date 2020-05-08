FROM node:alpine
RUN apk update && apk add --no-cache git
WORKDIR /app
ADD . .
EXPOSE 3000
CMD node src/index.js
