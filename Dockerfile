FROM node:current-alpine

WORKDIR /usr/src/app

RUN npm install

COPY . .

EXPOSE 3005

CMD ["npm", "run", "dev"]