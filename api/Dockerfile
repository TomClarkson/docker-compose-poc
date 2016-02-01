FROM node
WORKDIR /api
RUN npm i
RUN npm i -g knex
# RUN node_modules/.bin/knex migrate:latest
# RUN knex migrate:latest
# RUN knex seed:run
CMD knex migrate:latest && knex seed:run && node index.js