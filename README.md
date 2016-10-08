[![Status da construção](https://snap-ci.com/jzimermann/web-code-challenge/branch/master/build_image)](https://snap-ci.com/jzimermann/web-code-challenge/branch/master)

## About the solution
This is a simple [AngularJS](https://angularjs.org/) (version 1.2.16) solution tested in unit level (Jasmine + Karma) using TDD technique. The design was built using [SASS](http://sass-lang.com/) and [Flexbox](http://flexboxgrid.com/) - that provides a simple way to organise layouts. The dependency management is made by [NPM](https://www.npmjs.com/) and the the automation uses [GruntJS](http://gruntjs.com/).

Last but not less important: the response with route's information is mocked and managed by HttpStubberService - a custom service that is built on top of [$httpBackend](https://docs.angularjs.org/api/ngMock/service/$httpBackend).

## How to build and run

1. Install [NVM](https://github.com/creationix/nvm) to manage your Node version. This application was built using Node v0.10.40;

2. Install grunt: 
    npm install -g grunt-cli

3. Clone the code from my repo (git clone https://github.com/jzimermann/web-code-challenge.git) or unzip the file with all the source code;

4. On the web-code-challenge folder, install all the dependencies by running:
    npm install
    
5. Start the app by running:
    grunt serve
    
6. If you make any change, you can also run the unit tests (to check the code coverage, you can navigate to build/test-results/coverage/PhantomJS\ 1.9.8\ \(Mac\ OS\ X\)/index.html):
    grunt test 
    
7. Have fun! :)
