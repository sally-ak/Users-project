# Étape 1: Build
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Étape 2: Runtime
FROM node:20-slim
WORKDIR /app
COPY --from=build /app .

EXPOSE 5000
CMD ["npm", "run", "dev"]
