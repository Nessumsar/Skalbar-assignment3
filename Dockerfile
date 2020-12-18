FROM node   

WORKDIR usr/desktop/skalbar-assignment3/

COPY package*.json /usr/desktop/skalbar-assignment3/

RUN npm install

COPY . /usr/desktop/skalbar-assignment3/

EXPOSE 1337

CMD ["npm", "start"]

