# Set REACT_APP_PROD to 0 via --build-args to build as dev
ARG REACT_APP_PROD=1

FROM node:lts as base
LABEL maintainer="Maxime Aubanel <maximeauba@gmail.com>"

ENV REACT_APP_PROD ${REACT_APP_PROD}

RUN apt-get update
ADD . /home/workspace
WORKDIR "/home/workspace"

RUN bash -c "yarn install"
RUN bash -c "yarn build"

#
FROM node:lts-alpine
COPY --from=base /home/workspace/build ./build
CMD ["sh", "-c", "npx serve -l 80 -s build"]