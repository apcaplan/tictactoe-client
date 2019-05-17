#!/bin/bash

curl "https://tic-tac-toe-wdi.herokuapp.com/show" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
--data '{
  "game": {
    "id": 0,
    "cells": [],
    "over": false,
    "player_x": {
      "id": 1,
      "email": ""
    },
    "player_o": null
  }
}'

echo
