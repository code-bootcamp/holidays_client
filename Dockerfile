FROM node:14

COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/

RUN yarn install

COPY . /myfolder/

WORKDIR /myfolder

RUN yarn build:ssg
CMD yarn start

