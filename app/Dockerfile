FROM node:8-alpine
WORKDIR  /app
RUN mkdir app
COPY /build /app
RUN yarn global add serve
EXPOSE 3000
CMD serve -s ./app -p 3000
