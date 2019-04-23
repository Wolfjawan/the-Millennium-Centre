FROM node:8-alpine
WORKDIR  /app
COPY /build /app
RUN yarn global add serve
EXPOSE 3000
CMD serve -s . -p 3000
