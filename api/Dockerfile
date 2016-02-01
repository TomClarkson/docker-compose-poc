FROM node
WORKDIR /api
RUN npm i
CMD node_modules/.bin/knex migrate:latest 
	&& node_modules/.bin/knex seed:run 
	&& node index.js