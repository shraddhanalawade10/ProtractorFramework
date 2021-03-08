"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.petTypesPageObject = void 0;
var protractor_1 = require("protractor");
var log4jsconfig_1 = require("../config/log4jsconfig");
var expect = require('chai').expect;
var expCondition = protractor_1.ExpectedConditions;
var petTypesPageObject = (function () {
    function petTypesPageObject() {
        this.petTypeTab = protractor_1.element(protractor_1.by.css('ul.nav.navbar-nav>li:nth-child(4)'));
        this.petPage = protractor_1.element(protractor_1.by.css('.container.xd-container > h2'));
        this.addPetButton = protractor_1.element(protractor_1.by.buttonText('Add'));
        this.addName = protractor_1.element(protractor_1.by.id('name'));
        this.savePet = protractor_1.element(protractor_1.by.css("button[type='submit']"));
        this.petList = protractor_1.element(protractor_1.by.css('.table.table-striped tbody'));
        this.petList1 = protractor_1.element.all(protractor_1.by.css('tbody tr'));
        this.deletePetButon = protractor_1.element(protractor_1.by.buttonText('Delete'));
        this.homeButton = protractor_1.element(protractor_1.by.buttonText('Home'));
        this.firstPet = protractor_1.element(protractor_1.by.css('tbody tr td'));
        this.editPetButon = protractor_1.element(protractor_1.by.buttonText('Edit'));
        this.editPageTitle = protractor_1.element(protractor_1.by.css('.container.xd-container > h2'));
        this.addnewName = protractor_1.element(protractor_1.by.id('name'));
        this.updatePet = protractor_1.element(protractor_1.by.css("button[type='submit']"));
    }
    petTypesPageObject.prototype.goToPetType = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status, status1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.petTypeTab.click()];
                    case 1:
                        _a.sent();
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Click  PetType Tab")];
                    case 2:
                        _a.sent();
                        return [4, this.addPetButton.isEnabled()];
                    case 3:
                        status = _a.sent();
                        expect(status).to.equal(true);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Add Button Enable")];
                    case 4:
                        _a.sent();
                        return [4, this.homeButton.isEnabled()];
                    case 5:
                        status1 = _a.sent();
                        expect(status1).to.equal(true);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Home Button Enable")];
                    case 6:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    petTypesPageObject.prototype.goToHome = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.homeButton.click()];
                    case 1:
                        _a.sent();
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Home button Clickable")];
                    case 2:
                        _a.sent();
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Go to Home Page")];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    petTypesPageObject.prototype.verifyPetTypesPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.petPage.getAttribute('innerText').then(function (title) {
                            expect(title).to.equal('Pet Types');
                            console.log("Current page title(Pet Types) :- " + title);
                            log4jsconfig_1.log4jsconfig.Log().debug("Current page title(Pet Types) :- " + title);
                        })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    petTypesPageObject.prototype.verifyButtons = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.editPetButon.getAttribute('innerText').then(function (edittitle) {
                            expect(edittitle).to.equal('Edit');
                            log4jsconfig_1.log4jsconfig.Log().debug("Edit button is enabled");
                        })];
                    case 1:
                        _a.sent();
                        return [4, this.deletePetButon.getAttribute('innerText').then(function (deletetitle) {
                                expect(deletetitle).to.equal('Delete');
                                log4jsconfig_1.log4jsconfig.Log().debug("Delete button is enabled");
                            })];
                    case 2:
                        _a.sent();
                        return [4, this.addPetButton.getAttribute('innerText').then(function (addtitle) {
                                expect(addtitle).to.equal('Add');
                                log4jsconfig_1.log4jsconfig.Log().debug("Add button is enabled");
                            })];
                    case 3:
                        _a.sent();
                        return [4, this.homeButton.getAttribute('innerText').then(function (hometitle) {
                                expect(hometitle).to.equal('Home');
                                log4jsconfig_1.log4jsconfig.Log().debug("Home button is enabled");
                            })];
                    case 4:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    petTypesPageObject.prototype.addPetTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.addPetButton.click()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    petTypesPageObject.prototype.enterPetName = function (_a) {
        var petname = _a.petname;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.addName.sendKeys(petname)];
                    case 1:
                        _b.sent();
                        protractor_1.browser.sleep(4000);
                        return [4, this.savePet.click()];
                    case 2:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    petTypesPageObject.prototype.verifyPetTypeList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var table, row, count, i, firstTD, firstdata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        table = protractor_1.element(protractor_1.by.css('.table.table-striped tbody'));
                        row = table.$$("tr");
                        return [4, row.count()];
                    case 1:
                        count = _a.sent();
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Number of PetTypes present in the list are - " + count)];
                    case 2:
                        _a.sent();
                        protractor_1.browser.sleep(3000);
                        for (i = 0; i < count; i++) {
                            firstTD = row.get(i).$$("td");
                            firstdata = firstTD.get(0);
                            protractor_1.browser.wait(expCondition.presenceOf(firstdata), 5000);
                        }
                        return [2];
                }
            });
        });
    };
    petTypesPageObject.prototype.deletePetType = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.sleep(3000);
                        protractor_1.browser.refresh();
                        return [4, this.firstPet.element(protractor_1.by.name('pettype_name')).getAttribute('value').then(function (petName) {
                                console.log("Deleted PetType Name ::" + petName);
                                log4jsconfig_1.log4jsconfig.Log().debug("Deleted PetType Name::" + petName);
                            })];
                    case 1:
                        _a.sent();
                        protractor_1.browser.sleep(2000);
                        return [4, this.deletePetButon.click()];
                    case 2:
                        _a.sent();
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Delete PetType")];
                    case 3:
                        _a.sent();
                        protractor_1.browser.sleep(5000);
                        return [2];
                }
            });
        });
    };
    petTypesPageObject.prototype.editPetTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.editPetButon.click()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    petTypesPageObject.prototype.verifyEditPetTypesPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.editPageTitle.getAttribute('innerText').then(function (edittitle) {
                            expect(edittitle).to.equal('Edit Pet Type');
                            console.log("Current page title(Edit Pet Types) :- " + edittitle);
                            log4jsconfig_1.log4jsconfig.Log().debug("Current page title(Edit Pet Types) :- " + edittitle);
                        })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    petTypesPageObject.prototype.enterNewPetName = function (newPetType) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.sleep(2000);
                        return [4, this.addnewName.getAttribute('innerText').then(function (oname) {
                                console.log("Old PetType Name ::" + oname);
                                log4jsconfig_1.log4jsconfig.Log().info("Edit PetType Page Verify - " + oname);
                            })];
                    case 1:
                        _a.sent();
                        protractor_1.browser.sleep(3000);
                        return [4, this.addnewName.clear()];
                    case 2:
                        _a.sent();
                        protractor_1.browser.sleep(3000);
                        return [4, this.addnewName.sendKeys(newPetType)];
                    case 3:
                        _a.sent();
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Updated Pet Type name is :- " + newPetType)];
                    case 4:
                        _a.sent();
                        protractor_1.browser.sleep(2000);
                        return [2];
                }
            });
        });
    };
    petTypesPageObject.prototype.clickonUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.updatePet.click()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return petTypesPageObject;
}());
exports.petTypesPageObject = petTypesPageObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0VHlwZXNQYWdlT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9wZXRUeXBlc1BhZ2VPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXlGO0FBQ3pGLHVEQUFzRDtBQUM5QyxJQUFBLE1BQU0sR0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQXBCLENBQXFCO0FBRW5DLElBQUksWUFBWSxHQUFHLCtCQUFrQixDQUFDO0FBR3RDO0lBQUE7UUFFWSxlQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUNsRSxZQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztRQUMxRCxpQkFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdDLFlBQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNqQyxZQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUNuRCxZQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUN4RCxhQUFRLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzNDLG1CQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbEQsZUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxN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