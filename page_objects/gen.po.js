module.exports = {

    clickLoginBtn: () => {
        let submitPath = element(by.className('btn-login'));
        submitPath.click();
    }

}