FROM node:18.12.1

# Create app directory
RUN mkdir -p /home/app 
COPY . /home/app

# Install app dependencies
EXPOSE 3000
CMD ["node", "/home/app/index.js"]
