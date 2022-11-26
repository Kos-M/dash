#!/bin/bash

set -eu pipefail
 
source .env


if [ ! -d node_modules ] ; then
    echo "node_modules Not Found"
    exit 
fi
if [[ "$NODE_ENV" == "development" ]] ; then
    npm run start
elif [[ "$NODE_ENV" == "production" ]] ; then
    npm run start
elif [[ "$NODE_ENV" == "test" ]] ; then
    npm run test
fi
