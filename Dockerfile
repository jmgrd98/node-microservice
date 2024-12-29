# Use Node.js LTS version
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY ./src ./src

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "src/index.js"]
