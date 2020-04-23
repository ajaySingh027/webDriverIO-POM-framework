class ElementUtil {

    doClick(element){
        element.waitForDisplayed()
        element.click()
    }

    doSetValue(element, value){
        element.waitForDisplayed()
        element.setValue(value)
    }

    doGetText(element){
        element.waitForDisplayed()
        return element.getText()
    }

    doIsDisplayed(element){
        element.waitForDisplayed()
        return element.isDisplayed()
    }

    doGetPageTitle(pageTitle){
        browser.waitUntil(function(){
            return (browser.getTitle() === pageTitle)
        }, 10000, 'Title is not displayed after the time 10s'
    )
        return browser.getTitle()
    }

}

module.exports = new ElementUtil()