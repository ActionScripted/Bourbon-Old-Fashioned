Bourbon Old Fashioned
===

Simple starter project for responsive layouts. IE7+ friendly, SASSy, Grunt-ing, Bourbon-y.


Before You Begin
---

* Everything is meant to be modified, with a few exceptions. You should not need to modify Bourbon, Neat or the vendor JS. If you feel like you need to modify Bourbon/Neat, first try adjusting the settings in Bitters or in your own SASS files.
* If you want to upgrade versions of included files you're safe to do so. See Advanced Setup.
* Grunt builds everything to a git-ignored `build` folder. If you want this folder as part of your repo, adjust the `gitignore` file or the task script.


Quick Start
---
* Clone project
* Run `grunt`
* Make changes in `app`
* View/test changes from `build`


Setup
---

* Install Node/NPM (e.g., `brew install npm`)
* Install Grunt (e.g., `npm install -g grunt-cli`)
* Clone this project
* Adjust `package.json` for your needs
* Remove this project's git refs (`rm -rf .git`), setup your own repo
* Search for "todo" in the project and change where appropriate
* Install npm dependencies (`npm install`)
* Run `grunt` from within project folder
* Change stuff in `app` view results from `build`


(Advanced) Setup
---

* Same as above, but install the gems for bourbon, neat and bitters (`gem install bourbon neat bitters`)
* Upgrade or re-init bourbon, neat and bitters to bring in newer versions
* Adjust `Gruntfile.js` for a CMS (change build paths, for example, to drop into a CMS folder hierarchy)


What's Included
---

* [Bourbon](http://bourbon.io/): SASS mixin library, sort of like Compass
* [Bourbon Neat](http://neat.bourbon.io/): Semantic grid framework for easy responsive layouts
* [Bitters](http://bitters.bourbon.io/): Scaffold styles, variables and structure for Bourbon projects.
* [Refills](http://refills.bourbon.io/): Prepackaged patterns and components for Bourbon, Neat and Bitters
* [jQuery](http://jquery.com/): Utility library (if you don't know about jQuery, this might not be for you)
* [html5shiv-print](http://code.google.com/p/html5shiv/): HTML5 tag polyfill including print support
* [selectivizr](http://selectivizr.com/): CSS3 selectors for IE
* [Respond.js](https://github.com/scottjehl/Respond): media query polyfill for IE 6-8
