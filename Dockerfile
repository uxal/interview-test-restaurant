FROM alpine:3.11.3 as base
RUN apk add --update --no-cache nodejs yarn git

# Create app directory
WORKDIR /app
COPY package.json yarn.lock tsconfig.json server.ts tsconfig-server.json ./
RUN yarn -q

# COPY SOURCE CODE
COPY src src
COPY public public

# Build the app
RUN yarn prod

#EXPOSE PORT
EXPOSE 3000

CMD node -r source-map-support/register server.js

