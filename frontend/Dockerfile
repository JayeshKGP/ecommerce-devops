# Step 1: Build React app
FROM node:16 AS build

WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

# Step 2: Serve the built app using nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for public access
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]