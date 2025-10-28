# Use official Node base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy dependency files first.
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy rest of the project.
COPY . .

# Expose the port your Express app uses.
EXPOSE 3000

# Command to start the server
CMD ["node", "server.js"]