const loginpage = require('../pages/login.page');
const configData = require('../config');
const constants = require('../constants');

describe('Login Page features test', function(){


    it('Verify Login page title', function(){
        browser.url('/');
        browser.maximizeWindow();
        const title = loginpage.getPageTitle();
        console.log("Login page title is: ", title);
        assert.equal(constants.LOGIN_PAGE_TITLE, title, 'Page title not found')
    })


    it('Verify the sign Up Link', function(){
        assert.equal(true, loginpage.isSignUpLinkexist(), 'SignUp link is not present')
    })

    it('Verify Login', function(){
        loginpage.doLogin(configData.username, configData.password)
    })

})