#!/usr/bin/fish
set nvm_current "$(nvm current)"
if not string length --quiet nvm_current
  nvm use lts
  set nvm_current "$(nvm current)"
end
echo "Generating report"
npx -y license-report --only=prod --output=json  > public/json/Licence.json