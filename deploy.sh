rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:oceans42/boluo-ui-website.git &&
git push -f -u origin main &&
cd -
echo https://sparks42.top/boluo-ui-website/index.html