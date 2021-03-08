"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var log4jsconfig_1 = require("../config/log4jsconfig");
describe("PetClinic test", function () {
    beforeEach(function () {
        protractor_1.browser.get("http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/welcome");
    });
    it("Launch url check", function () {
        expect(protractor_1.browser.getTitle()).toContain("SpringPetclinicAngular");
        var browsertitle = protractor_1.browser.getTitle();
        browsertitle.then(function (txt) {
            console.log("Browser Title :-" + txt);
            log4jsconfig_1.log4jsconfig.Log().debug("Browser Title :-" + txt);
        });
    });
    it("Click on Owners button", function () {
        protractor_1.element(protractor_1.by.css("ul.navbar-nav li.dropdown:nth-child(2)")).click();
        protractor_1.element(protractor_1.by.css("[routerlink='/owners/add']")).click();
        protractor_1.element(protractor_1.by.id('firstName')).sendKeys("Steve");
        protractor_1.element(protractor_1.by.id('lastName')).sendKeys("Smith");
        protractor_1.element(protractor_1.by.id('address')).sendKeys("15 street");
        protractor_1.element(protractor_1.by.id('city')).sendKeys("Melbourne");
        protractor_1.element(protractor_1.by.id('telephone')).sendKeys("15467");
        protractor_1.element(protractor_1.by.buttonText('Add Owner')).click();
        protractor_1.browser.sleep(3000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL2hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBaUQ7QUFDakQsdURBQXNEO0FBRXRELFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUV2QixVQUFVLENBQUM7UUFDUCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDO0lBQzlGLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLGtCQUFrQixFQUFFO1FBQ25CLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFL0QsSUFBSSxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLDJCQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsd0JBQXdCLEVBQUU7UUFDekIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RELG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0Msb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUE7QUFRTixDQUFDLENBQUMsQ0FBQSJ9