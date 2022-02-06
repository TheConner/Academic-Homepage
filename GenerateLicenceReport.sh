#!/usr/bin/fish
nvm use lts
echo "Generating report"
npx -y license-report --only=prod --output=json  > static/json/Licence.json