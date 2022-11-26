FROM node:16.4.2-buster-slim  as deps-intermediate
WORKDIR /app
COPY package.json .
RUN yarn install --production=true --ignore-optional --silent  --non-interactive
FROM node:16.4.2-buster-slim as final
WORKDIR /app
COPY . .    
COPY --from=deps-intermediate ./app/node_modules ./node_modules
# COPY .env  .
CMD ["npm", "start"]
#  CMD ["tail", "-f" , "/dev/null"]
#  CMD ["/bin/ls -ls"]

