describe('Learning Actions on Practice website', function () {    
    
    
    it('open Automation Practice website and write the steps to Automate it', function () 
    
    {        
        
        browser.waitForAngularEnabled(false);        
        
        browser.get('https://rahulshettyacademy.com/AutomationPractice/');        
        element(by.css("input[value='radio2']")).click();        
        var dd = element(by.id("autocomplete"));        
        browser.actions().mouseMove(dd);        
        dd.sendKeys("Australia");                
        dd.sendKeys(protractor.Key.ARROW_DOWN);                
        dd.sendKeys(protractor.Key.ENTER);            
    });
});