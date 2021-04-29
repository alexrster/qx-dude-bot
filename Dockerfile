FROM node:12.18-alpine as build
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .

FROM build
USER 1000
EXPOSE 3000
CMD ["node", "index.js"]
