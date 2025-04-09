FROM node:23-alpine

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/apps/api

RUN npm install --workspaces

RUN npm run build

EXPOSE 4000

CMD ["node", "dist/index.js"]
