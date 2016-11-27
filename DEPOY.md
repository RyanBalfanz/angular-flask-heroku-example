# Deploying

## Deploying to Github Pages

heroku apps:create --buildpack https://github.com/heroku/heroku-buildpack-multi.git
heroku config:set NPM_CONFIG_PRODUCTION=false
