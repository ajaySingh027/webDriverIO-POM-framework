const loginpage = require('../pages/login.page');
const homepage = require('../pages/home.page')
const configData = require('../config');
const constants = require('../constants');


describe('Home page feature tests', function(){

    it('Verify home page title', function(){
        browser.url('/')
        browser.maximizeWindow()
        loginpage.doLogin(configData.username, configData.password)
        const title = homepage.getPageTitle()
        console.log("Home page title is: ", title)
        assert.equal(constants.HOME_PAGE_TITLE, title, 'Title not found')

    })

    it("Verify the Home page header", function(){
        assert.equal(constants.HOME_PAGE_HEADER, homepage.getHeaderText(), 'Home page header not present')
    })
})