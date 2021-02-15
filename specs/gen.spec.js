let genPage = require('../page_objects/gen.po');

describe('hello orderos', function() {

    it('log in successfully', () => {
    
    browser.ignoreSynchronization = true;
    browser.get('https://hello.orderos.net/');
    browser.manage().window().maximize();

    browser.sleep(3000);
    genPage.clickLoginBtn();


    });
  });
