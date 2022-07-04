FROM node:16-alpine AS build
WORKDIR /usr/app/
COPY ./ ./
RUN npm install

FROM node:16-alpine
WORKDIR /usr/app/
COPY --from=build /usr/app/ ./
CMD ["npm", "start"]