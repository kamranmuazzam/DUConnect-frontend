#!/bin/bash

# Check if the commit message is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <commit message>"
    exit 1
fi

# Run Git commands
git pull
git add --all
git commit -m "$1"
git push -u origin main
