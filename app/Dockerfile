FROM node:latest

RUN npm install -g npm@8.18.0
RUN npm install nodemon -g

WORKDIR /usr/src/nodejsapp
ADD ./package.json .
RUN npm install
RUN npm install -g ts-node
RUN npm install -g typescript


EXPOSE 3000

CMD npm start