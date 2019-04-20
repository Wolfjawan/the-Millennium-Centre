#!/bin/sh

serve -s ./app -p 3000
cd servr && yarn dev
