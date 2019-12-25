var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {

 
    directConnect:true,
    
        specs: ['spec1.js'],


     onPrepare: function(){

        browser.manage().window().maximize();

        jasmine.getEnv().addReporter(
         new Jasmine2HtmlReporter({
           savePath: 'target/screenshots'
         })
       );

     },

     suites:{

      Smoke:["alert.js"]
     },

     jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    }
    }