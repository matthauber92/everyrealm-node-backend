FROM node:alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .
RUN npx prisma generate

EXPOSE 8000

CMD ["npm", "run", "dev"]
