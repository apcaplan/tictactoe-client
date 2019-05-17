#!/bin/bash

curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
    --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "id": "",
      "cells": [],
      "over": false,
      "player_x": {
        "id": "",
        "email": ""
      },
      "player_o": null
    }
  }'

echo
