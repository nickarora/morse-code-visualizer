#!/usr/bin/env bash

set -e

echo
echo "Start"
echo "= = ="

echo
echo "Compiling Source"
echo "- - -"
npm run compile

echo
echo "Starting Server"
echo "- - -"

current_dir=$(dirname $0)
node $current_dir/server.js
