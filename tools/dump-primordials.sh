#!/usr/bin/env bash
set -e
NODE_NO_WARNINGS=1 node --expose-internals -r internal/test/binding \
  -p 'Reflect.ownKeys(primordials).join("\n")'
