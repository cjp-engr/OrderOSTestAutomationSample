let loginPagePath = require('../resources/login-page-path.json').loginPagePath;

module.exports = {

    inputEmail: (value) => {
        let emailPath = element(by.id(loginPagePath.emailPath));
        emailPath.sendKeys(value);
    },

    inputPassword: (value) => {
        let passPath = element(by.id(loginPagePath.passPath));
        passPath.sendKeys(value);
    },

    clickPasswordVisibility: () => {
        let visibility = element(by.xpath(loginPagePath.visibility));
        visibility.click();
    },

    clickLoginButton: () => {
        let submitPath = element(by.className(loginPagePath.loginPath));
        submitPath.click();
    }
}