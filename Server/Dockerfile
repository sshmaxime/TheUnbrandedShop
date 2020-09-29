FROM node:lts as base
LABEL maintainer="Maxime Aubanel <maximeauba@gmail.com>"

RUN apt-get update

ADD . /home/workspace

WORKDIR "/home/workspace"

ENV REACT_APP_PROD 1
ENV PORT 80

RUN bash -c "yarn install"

CMD ["bash", "-c", "yarn start"]