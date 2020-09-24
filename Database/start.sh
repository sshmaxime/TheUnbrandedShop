#!/bin/bash

bash -c "docker run -v $PWD/data:/opt/couchdb/data -p 5984:5984 -e COUCHDB_USER=admin -e COUCHDB_PASSWORD=admin couchdb"
