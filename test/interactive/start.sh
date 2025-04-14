#!/usr/bin/env bash

set -e

echo
echo "Start Interactive Server"
echo "= = ="

current_dir=$(dirname $0)
node $current_dir/server.js
