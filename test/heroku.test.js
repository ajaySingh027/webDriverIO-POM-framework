const herokupage = require('../pages/heroku.page');


describe('Heroku app Home page dropdown feature', function(){

    beforeEach(function() {
        browser.url('http://the-internet.herokuapp.com/');
        browser.maximizeWindow();
    });

    it('Validate dropdown by selecting value', function(){
        herokupage.clickDropdownLink();
        herokupage.selectValue('1');
        browser.pause(2000);
        console.log(herokupage.categoryDropdown.getValue());
    });


    // it('')
});