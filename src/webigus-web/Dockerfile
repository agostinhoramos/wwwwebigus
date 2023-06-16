FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash && \
    apt-get install -y nodejs && \
    apt-get clean

RUN mkdir -p /app/nxt-ui/

WORKDIR /app/nxt-ui/

RUN npm install -g yarn

RUN yarn global add next

COPY . /app/nxt-ui/

RUN npm install

RUN npm run build

EXPOSE 1400

CMD npm run start