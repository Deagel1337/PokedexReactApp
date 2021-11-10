FROM node:10 as builder

WORKDIR /react-exercise

COPY . .

RUN npm install && npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /react-exercise/build/ .

ENTRYPOINT ["nginx","-g","daemon off;" ]