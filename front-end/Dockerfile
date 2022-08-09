# get the base node image
FROM node:alpine as builder

# copy the json file first
COPY ./package.json 

# install npm dependencies
RUN npm install

# copy other project files
COPY . .

# build the folder
CMD [ "npm", "run", "start" ]