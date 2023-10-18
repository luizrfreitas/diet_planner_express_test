FROM node:14

WORKDIR /usr/src/app

# # Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# # Install dependencies
RUN npm install

# # Copy the rest of the application code to the working directory
# COPY . .

# # Expose the port on which your Node.js application runs
EXPOSE 5000

# Command to run your Node.js application
# CMD [ "nodemon", "server.js" ]
