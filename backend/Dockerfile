FROM node:latest AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:latest

WORKDIR /app

COPY --from=builder /app .

RUN npm install --only=production

EXPOSE 5000

CMD ["node", "server.js"]