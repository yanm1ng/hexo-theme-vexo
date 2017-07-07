#!/bin/bash

# Lint EJS files
for f in $(find ./layout -name "*.ejs"); do
  echo $f;
  node_modules/.bin/ejslint $f;
done

#Lint JS files
for f in $(find ./source/js -name "*.js"); do
  echo $f;
  node_modules/.bin/standard $f;
done