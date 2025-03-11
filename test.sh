#!/usr/bin/env bash

set -e

shopt -s globstar extglob

npm test "./test/automated/**/*.mjs" -- --exclude "**/*-init.mjs" --parallel "$@"
