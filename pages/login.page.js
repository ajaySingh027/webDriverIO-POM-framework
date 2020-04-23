const elementUtil = require("../Util/elementUtil")

class LoginPage{

    //***  Page object locators
    get username() {return $('#username')}
    get password() {return $('#password')}
    get loginBtn() {return $('#loginBtn')}
    get signUpLink() {return $('=Sign up')}


    //**  page actions
    getPageTitle(){
        return elementUtil.doGetPageTitle()
    }

    
    isSignUpLinkexist(){
        return elementUtil.doIsDisplayed(this.signUpLink)
    }

}

module.exports = new loginBtn()