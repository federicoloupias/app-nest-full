FROM node:14 as builder
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build

FROM node:14
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 5130
CMD npm run start:prod