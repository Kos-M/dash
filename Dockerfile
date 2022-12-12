FROM node:16.13.1-buster-slim  as deps-intermediate
ENV NODE_ENV production
USER node
WORKDIR /app
COPY package*.json .
RUN npm i --only=production


FROM node:16.4.2-buster-slim as builder
WORKDIR /app
COPY . .    
COPY --from=deps-intermediate ./app/node_modules ./node_modules

RUN npm run build

FROM nginx:mainline-alpine as final

COPY nginx/base.conf /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder  --chown=nginx:nginx /app/build /var/www/html
CMD ["nginx", "-g", "daemon off;"]