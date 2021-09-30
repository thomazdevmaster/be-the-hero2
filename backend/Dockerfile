FROM node:12

WORKDIR /app
COPY package.json .
RUN apt-get -y update \
    && npm install

COPY . .

RUN npx knex migrate:latest

EXPOSE 3333

CMD ["npm", "start"]
