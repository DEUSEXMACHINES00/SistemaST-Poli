FROM node:latest

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm update

RUN chmod +x node_modules/.bin/nodemon

ENV MONGO_URI mongodb+srv://tomasecheverri82182:1238938029@clusterst.gi2bt86.mongodb.net/PPPDP?retryWrites=true&w=majority

EXPOSE 3000

CMD ["npm", "start"]
