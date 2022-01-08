FROM node:17.3.0-alpine

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN yarn --silent && yarn build

WORKDIR /usr/src/app/build

CMD ["node", "index.js"]
