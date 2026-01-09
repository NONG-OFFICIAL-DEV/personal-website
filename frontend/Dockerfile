# -------- Build Vue --------
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# -------- Serve with Caddy --------
FROM caddy:2-alpine

# Copy built Vue app
COPY --from=build /app/dist /usr/share/caddy

# Optional: custom Caddyfile
# COPY Caddyfile /etc/caddy/Caddyfile