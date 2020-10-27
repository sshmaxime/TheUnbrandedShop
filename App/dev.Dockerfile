FROM node:lts as base
LABEL maintainer="Maxime Aubanel <maximeauba@gmail.com>"

RUN apt-get update
ADD . /workspace
WORKDIR "/workspace"

RUN bash -c "yarn install"

CMD ["sh", "-c", "yarn start"]