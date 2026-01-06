# Use official Node.js LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install only production deps
RUN npm install --production

# Copy app source
COPY . .

# Expose backend port
EXPOSE 9090

# Start server
CMD ["node", "server.js"]
