rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:FrankFang/gulu-ui-website-1.git &&
git push -f -u origin master &&
cd -
echo https://sparks42.top/boluo-ui-website/index.html