FROM node:9-alpine
RUN apk --no-cache add tini

WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN yarn install
COPY . /usr/src/app

CMD [ "tini", "--", "node", "index.js" ]
