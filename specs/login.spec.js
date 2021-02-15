let specLoginPage = require('../page_objects/login.po.js');

describe('hello orderos', function() {

    it('log in successfully', () => {
    
    browser.ignoreSynchronization = true;
    browser.get('https://hello.orderos.net/login');
    browser.manage().window().maximize();

    browser.sleep(3000);

    specLoginPage.inputEmail('carmentest001@gmail.com');
    browser.sleep(3000);

    specLoginPage.inputPassword('HELLOworld75!');
    browser.sleep(3000);

    specLoginPage.clickPasswordVisibility();
    browser.sleep(3000);

    specLoginPage.clickLoginButton();
    browser.sleep(3000); 

    });
  });
