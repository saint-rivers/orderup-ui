#stage 1
FROM node:16.10 as node
WORKDIR /app
COPY . .
RUN npm install -g npm@8.17.0
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
RUN echo $(ls /app/dist)
COPY --from=node /app/dist/nhamey-reactive-ui /usr/share/nginx/html