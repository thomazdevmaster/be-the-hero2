FROM node:14

WORKDIR /app
COPY package.json .
RUN apt-get -y update \
    && npm install \
    && npm install -g serve
COPY . .

EXPOSE 3000

CMD ["serve", "-s", "-p", "3000", "build"]
