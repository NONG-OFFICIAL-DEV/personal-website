FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Ensure your server.js is listening on port 9090
EXPOSE 9090

CMD ["node", "server.js"]