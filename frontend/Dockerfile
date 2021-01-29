FROM node:14 as build
WORKDIR /client
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx
COPY --from=build /client/build /usr/share/nginx/html