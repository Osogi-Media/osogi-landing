COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Build the React app
RUN npm run build

# Set the environment variable for the port
ENV PORT 5173

# Expose the specified port
EXPOSE 5173

# Start the React app
CMD ["npm", "start"]