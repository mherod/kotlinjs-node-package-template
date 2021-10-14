#!/bin/bash

which gsed || exit 1

OLD_NAME="kotlinjs-node-package-template"
NEW_NAME="kotlinjs-node-package-template"
FILES=$(grep -r --exclude-dir='.git' "$OLD_NAME" -l .)
FILES2=$(find . -name "*$OLD_NAME*")

for f in $FILES; do
  gsed -i "s/$OLD_NAME/$NEW_NAME/g" "$f"
done

for f in $FILES2; do
  mv "$f" "${f//$OLD_NAME/$NEW_NAME}"
done
