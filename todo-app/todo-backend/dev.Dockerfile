FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm install -g nodemon

RUN npm install

ENV DEBUG=todo-express-backend:*

USER node

CMD ["npm", "run", "dev", "--", "--host"]
