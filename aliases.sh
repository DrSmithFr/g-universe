#!/bin/bash

ID=$(id -u)

function reload() {
    docker-compose kill && \
    docker-compose rm -f && \
    docker-compose build && \
    docker-compose up -d --remove-orphans
}

function serve() {
    docker-compose exec --user="$ID:$ID" angular sh -c "ng serve --host 0.0.0.0 --disable-host-check"
}

function ng() {
    docker-compose exec --user="$ID:$ID" angular sh -c "ng $@"
}

function npm() {
    docker-compose exec --user="$ID:$ID" angular sh -c "npm $@"
}

$@
