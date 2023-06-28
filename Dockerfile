FROM node:16.18-alpine

WORKDIR /main
COPY ./barrel-trainer /main
RUN rm -r /main/node_modules -f
RUN \
    npm install && mv /main/node_modules /node_modules
CMD ["npm", "start"]