FROM node:8-alpine
WORKDIR  /app
RUN mkdir app && mkdir server
COPY /app/build /app/app
COPY /server /app/server
COPY serve.sh /app
RUN yarn global add serve && chmod 755 serve.sh 
EXPOSE 3000
CMD ./serve.sh
