import { browser, by, element } from "protractor"
import { log4jsconfig } from '../config/log4jsconfig';

describe("PetClinic test", function () {

    beforeEach(function () {
        browser.get("http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/welcome");
    })

    it("Launch url check", function () {
        expect(browser.getTitle()).toContain("SpringPetclinicAngular");
        //console.log("Browser Title :-" + browser.getTitle());
        let browsertitle = browser.getTitle();      //promised implementation
        browsertitle.then(function (txt) {
            console.log("Browser Title :-" + txt);
            log4jsconfig.Log().debug("Browser Title :-" + txt);
        });
    })

    it("Click on Owners button", function () {
        element(by.css("ul.navbar-nav li.dropdown:nth-child(2)")).click();
        element(by.css("[routerlink='/owners/add']")).click();
        element(by.id('firstName')).sendKeys("Steve");
        element(by.id('lastName')).sendKeys("Smith");
        element(by.id('address')).sendKeys("15 street");
        element(by.id('city')).sendKeys("Melbourne");
        element(by.id('telephone')).sendKeys("15467");
        element(by.buttonText('Add Owner')).click();
        browser.sleep(3000);
    })

    /* it("Addition of 2 numbers", function () {
         element(by.model("first")).sendKeys("12");
         element(by.model("second")).sendKeys("12");
         element(by.id("gobutton")).click();
         browser.sleep(3000);
     })*/
})