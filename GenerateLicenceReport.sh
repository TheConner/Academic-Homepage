#!/usr/bin/fish
nvm use lts
echo "Generating report"
npx -y license-report --only=prod --output=json  > src/data/Licences.json