# -------- Build Vue --------
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# -------- Serve with Caddy --------
FROM caddy:2-alpine

COPY ./dist /usr/share/caddy
COPY ./Caddyfile /etc/caddy/Caddyfile
