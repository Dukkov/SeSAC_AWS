FROM node:18-slim

WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT [ "node" ]
CMD [ "app.js" ]