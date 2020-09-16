FROM node:lts as base
LABEL maintainer="Maxime Aubanel <maximeauba@gmail.com>"

RUN apt-get update

ADD . /home/workspace

WORKDIR "/home/workspace"

ENV REACT_APP_PROD 1

RUN bash -c "yarn install"
RUN bash -c "yarn build"

# 

FROM node:lts

RUN bash -c "yarn global add serve"
COPY --from=base /home/workspace/build ./build

CMD ["bash", "-c", "serve -l 3000 -s build"]
