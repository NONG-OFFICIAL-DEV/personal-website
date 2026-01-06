# STEP 1: Build Vue Assets
FROM node:20-bullseye AS build-stage

WORKDIR /app

# Install build tools
RUN apt-get update && apt-get install -y python3 g++ make bash && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY frontend/package*.json ./

# Install dependencies
RUN npm install && npm install @rollup/rollup-linux-x64-musl

# Copy source code
COPY frontend/ ./

# Build Vue
RUN npm run build

# STEP 2: Production Caddy
FROM caddy:2.8.0-alpine

WORKDIR /usr/share/caddy

# Copy Vue build
COPY --from=build-stage /app/dist /usr/share/caddy

# Copy config
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80 443
