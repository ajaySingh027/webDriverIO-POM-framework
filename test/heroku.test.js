const herokupage = require('../pages/heroku.page');


describe('Heroku app Home page dropdown feature', function(){


    it('Validate dropdown by selecting value', function(){
        browser.url('http://the-internet.herokuapp.com/');
        browser.maximizeWindow();
        herokupage.clickDropdownLink();
        herokupage.selectValue('1');
        browser.pause(2000);
        console.log(herokupage.categoryDropdown.getValue());
    })


    // it('')
})