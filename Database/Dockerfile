FROM couchdb:3.1.1

ARG ARG_COUCHDB_USER=admin
ARG ARG_COUCHDB_PASSWORD=admin

ENV COUCHDB_USER=${ARG_COUCHDB_USER}
ENV COUCHDB_PASSWORD=${ARG_COUCHDB_PASSWORD}

EXPOSE 5984

ADD config/*.ini /opt/couchdb/etc/default.d/

ADD db_data /opt/couchdb/data