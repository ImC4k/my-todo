FROM node:13.12.0-alpine

WORKDIR /Users/imc4k/Documents/TATP_training/my-todo

ENV PATH /Users/imc4k/Documents/TATP_training/my-todo/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-script@latest -g --silent

COPY . ./

CMD ["npm", "start"]