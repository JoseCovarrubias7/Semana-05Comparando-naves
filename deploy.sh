#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://JoseCovarrubias7.github.io
# git push -f git@github.com:JoseCovarrubias7/JoseCovarrubias7.github.io.git main

# if you are deploying to https://JoseCovarrubias7.github.io/Semana-05Comparando-naves
# git push -f git@github.com:JoseCovarrubias7/Semana-05Comparando-naves.git main

cd -
