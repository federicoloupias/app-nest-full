FROM node:current-alpine as build
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /build /usr/share/nginx/html
