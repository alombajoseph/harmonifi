#!/bin/bash

# author-generator.sh

# Ensure the AUTHORS file exists
touch AUTHORS

# Add the project author (Alomba Joseph) if not already added
if ! grep -q "Alomba Joseph" AUTHORS; then
    echo "- Alomba Joseph <alombajoseph@gmail.com>" >> AUTHORS
fi

# Extract git commit authors and add them to the AUTHORS file
echo "Updating AUTHORS file with Git contributors..."
git log --format='%aN <%aE>' | sort -u >> CONTRIBUTORS
cat CONTRIBUTORS | sort -u >> AUTHORS
rm CONTRIBUTORS

echo "AUTHORS file has been updated."

