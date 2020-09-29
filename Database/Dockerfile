FROM couchdb:3.1.1

ENV COUCHDB_USER=admin
ENV COUCHDB_PASSWORD=admin

EXPOSE 5984

ADD config/*.ini /opt/couchdb/etc/default.d/

ADD data /opt/couchdb/data
