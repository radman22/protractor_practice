describe('Protractor baby steps',function() {

    var obj=  require("./pageObjects.js");
    var d = require("./data.js")
    var using = require('jasmine-data-provider');
    beforeEach(function() {
        obj.getURL();
      });
    
    
      using(d.dataDriven, function (data, description) {

        it('Open Angular js website'+description,function() {
    
          browser.waitForAngularEnabled(false);        
            
              obj.firstinput.sendKeys(data.firstInput);
              obj.secondinput.sendKeys(data.secondInput);
          
              obj.goButton.click();
          
          
                  
              
              })

        });
 
 
    
     
 
    afterEach(function() {
        console.log("The testing ended"); 
      });

    
    
    })