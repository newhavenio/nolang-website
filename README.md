#nolang-website


NoLang, the conf! This is the website for it.

##Install Instructions
*requires node.js*

check out this repository

    git clone https://github.com/newhavenio/nolang-website.git
    cd nolang-website

Install Gulp, the streaming build system, and gulp-embedlr

    npm install -g gulp
    npm install -g gulp-embedlr

If you don't have bower, install that

    npm install -g bower

Install dependencies in package.json and bower.json

    npm install
    bower install

Install the sass-based semantic grid framework and mixin library,
"neat" and "bourbon"

    gem install sass
    gem install bourbon
    gem install neat

Finally, run gulp. This will build the site, open it up a browser window and
automatically refresh as you make changes to different files.

    gulp

## Deployment

This site is hosted on S3 as static assets. To deploy, you'll need to
have the following environment variables defined

    AWS_ACCESS_KEY_ID=XXXXXXXXXXXXXXXXXXX
    AWS_SECRET_ACCESS_KEY=XXXXXXXXXXXXXXXXXXX
    AWS_DEPLOY_BUCKET=www.nolang.io

Then, you can run

    gulp deploy

You should see a message like the following

    [gulp] Using gulpfile ~/src/nolang-website/gulpfile.js
    [gulp] Starting 'deploy'...
    [gulp] [update] app.js
    [gulp] [update] index.html
    [gulp] [update] css/main.min.css
    [gulp] [update] fonts/gotham-book-webfont.eot
    [gulp] [update] fonts/gotham-book-webfont.svg
    [gulp] [update] fonts/gotham-book-webfont.ttf
    [gulp] [update] fonts/gotham-book-webfont.woff
    [gulp] [update] fonts/gotham-medium-webfont.eot
    [gulp] [update] fonts/gotham-medium-webfont.svg
    [gulp] [update] fonts/gotham-medium-webfont.ttf
    [gulp] [update] fonts/gotham-medium-webfont.woff
    [gulp] [update] images/bg_attendees.jpg
    [gulp] [update] images/bg_header.jpg
    [gulp] [update] images/bg_new_haven.jpg
    [gulp] [update] images/bg_signup.jpg
    [gulp] [update] images/icon_dummy_logo.png
    [gulp] [update] images/icon_hack.png
    [gulp] [update] images/icon_logo.png
    [gulp] [update] images/icon_meet.png
    [gulp] [update] images/icon_think.png
    [gulp] [update] images/img_adam_chambers.jpg
    [gulp] [update] images/img_location.jpg
    [gulp] [update] images/img_party.jpg
    [gulp] [update] images/img_venue.jpg
    [gulp] Finished 'deploy' after 13 s
