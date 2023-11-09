#Stage 1
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --production
COPY . ./
RUN yarn build

# Stage 2
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf./*
COPY --from=builder /frontend/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]