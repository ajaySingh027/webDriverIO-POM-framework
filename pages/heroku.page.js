const elementUtil = require("../Util/elementUtil");


class HerokuPage {

    get dropdownLink()
    { return $('=Dropdown')}

    clickDropdownLink(){
        elementUtil.doClick(this.dropdownLink);
    }

    get categoryDropdown()
    { return $('#dropdown') }

    
    selectValue(option) {
        $('#dropdown').selectByAttribute('value', option);
    }

}

module.exports = new HerokuPage()