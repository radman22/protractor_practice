describe('Protractor baby steps',function() {  

it('Open Angular js website',function() {
    
browser.waitForAngularEnabled(false);        
browser.get('http://juliemr.github.io/protractor-demo/')
    
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);

    element(by.id('gobutton')).click();

    element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
    {
    
    console.log(text);
    })
    
        
    
    })
    
     
    
    
    //Each it block will be called as a spec
    
    
    
    it('close browswer', function() {
    
    
    
    // code to close browser
    })
    
    
    
    })