# ---------- Build stage ----------
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code and build Vue
COPY . .
RUN npm run build

# ---------- Production stage ----------
FROM caddy:2.8.0-alpine

# Copy Vue build output to Caddy root
COPY --from=build /app/dist /usr/share/caddy

# Copy Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Expose HTTP and HTTPS
EXPOSE 80 443
