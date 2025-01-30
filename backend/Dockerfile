FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN curl -o /certs/rds-combined-ca-bundle.pem https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.pem
CMD [ "node", "src/index.js" ]
EXPOSE 4000