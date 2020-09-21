FROM node:12-alpine
COPY . /src
WORKDIR /src
COPY package*.json ./
RUN npm install
EXPOSE 3006
CMD npm start