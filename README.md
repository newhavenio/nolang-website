``#nolang-website


NoLang, the conf! This is the website for it.

##Install Instructions

### Installing node and npm

If you're on a mac, it's likely easiest to install [node](http://nodejs.org/)
via [homebrew](http://brew.sh/).  If you're on another *nix machine,
you can likely figure this out for yourself.  If you're on windows,
you're on your own.

    brew install node

Then, you'll need to install [npm](https://npmjs.org/),
the node package manager.

    curl https://npmjs.org/install.sh | sh

### Checkout the code for website

Check out this repository using the following commands.

    git clone https://github.com/newhavenio/nolang-website.git
    cd nolang-website

### Installing build dependencies

This website uses [Gulp](https://github.com/gulpjs/gulp),
a streaming build system for node.

Install Gulp, the streaming build system

    npm install -g gulp

Install dependencies in package.json and bower.json

    npm install
    bower install

Install the [sass](http://sass-lang.com/)-based semantic grid
framework and mixin library,
[neat](http://neat.bourbon.io/) and
[bourbon](http://bourbon.io/).

    gem install sass
    gem install bourbon
    gem install neat

Finally, run `gulp`. This will build the site, open it up a browser window and
automatically refresh as you make changes to different files.

    gulp

(Alternatively, if you didn't install gulp globally, you can
run it via `./node_modules/.bin/gulp`). This will open up a 
preview of the website with live-reload, etc.
