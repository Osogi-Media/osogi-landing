# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the React app
RUN npm run build

# Set the environment variable for the port
ENV PORT 8080

# Expose the specified port
EXPOSE 8080

# Start the React app
CMD ["npm", "start"]