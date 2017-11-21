FROM node

ENV PORT 2022

COPY . /app
WORKDIR /app
RUN ["npm", "run-script", "build"]
EXPOSE 2022
ENTRYPOINT [ "node", "server.js" ]