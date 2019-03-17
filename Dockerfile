FROM node:8-alpine
WORKDIR  /app
COPY ./build
RUN yarn global add serve 
EXPOSE 3000
CMD yarn serve -s 3000 .
