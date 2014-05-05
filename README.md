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
