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
exports.VeterinarianPageObject = void 0;
var protractor_1 = require("protractor");
var log4jsconfig_1 = require("../config/log4jsconfig");
var expect = require('chai').expect;
var expCondition = protractor_1.ExpectedConditions;
var VeterinarianPageObject = (function () {
    function VeterinarianPageObject() {
        this.verterinansTab = protractor_1.element(protractor_1.by.css('ul.nav.navbar-nav>li:nth-child(3)'));
        this.addVenterinans = protractor_1.element(protractor_1.by.css('[href="/petclinic/vets/add"]'));
        this.venterinansTitle = protractor_1.element(protractor_1.by.css('.container.xd-container>h2'));
        this.vFirstname = protractor_1.element(protractor_1.by.id('firstName'));
        this.vLastname = protractor_1.element(protractor_1.by.id('lastName'));
        this.vType = protractor_1.element(protractor_1.by.name('specialties'));
        this.vDropType = protractor_1.element(protractor_1.by.css('select option:nth-child(3)'));
        this.vAllDropType = protractor_1.element.all(protractor_1.by.css('#specialties option'));
        this.saveVenterinans = protractor_1.element(protractor_1.by.css("button[type='submit']"));
        this.venList = protractor_1.element(protractor_1.by.css('.table.table-striped tbody'));
        this.veterinarians = protractor_1.element(protractor_1.by.css('.container-fluid .container.xd-container > h2'));
        this.enable = protractor_1.element(protractor_1.by.css('.table.table-striped thead tr'));
        this.backButton1 = protractor_1.element(protractor_1.by.css('.btn.btn-default'));
    }
    VeterinarianPageObject.prototype.goToVen = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.verterinansTab.click()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    VeterinarianPageObject.prototype.verifyVenteinansTiltle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.venterinansTitle.getAttribute('innerText').then(function (title) {
                            expect(title).to.equal('New Veterinarian');
                            console.log("Veterinarian Page  :: " + title);
                            log4jsconfig_1.log4jsconfig.Log().debug("Veterinarian Page Verify :: " + title);
                        })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    VeterinarianPageObject.prototype.allVenteinansTiltle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, protractor_1.browser.wait(expCondition.presenceOf(this.veterinarians), 20000, 'Taking too long to load')];
                    case 1:
                        _a.sent();
                        return [4, this.veterinarians.getAttribute('innerText').then(function (head) {
                                expect(head).to.equal('Veterinarians');
                                console.log("All Veterinarian Page  :: " + head);
                                log4jsconfig_1.log4jsconfig.Log().debug("Veterinarian Page  Verify:: " + head);
                            })];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    VeterinarianPageObject.prototype.newVen = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, protractor_1.browser.wait(expCondition.presenceOf(this.addVenterinans), 30000, 'Taking too long to load')];
                    case 1:
                        _a.sent();
                        log4jsconfig_1.log4jsconfig.Log().debug("CLick on Add New button to add New Veterinarian");
                        return [4, this.addVenterinans.click()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    VeterinarianPageObject.prototype.addNewOwnerInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dcount, i, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4, this.vFirstname.sendKeys('Smita')];
                    case 1:
                        _e.sent();
                        expect('Smita').to.have.lengthOf.above(2);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Firstname is greater than 2 character :: Smita")];
                    case 2:
                        _e.sent();
                        return [4, this.vLastname.sendKeys('Khatavkar')];
                    case 3:
                        _e.sent();
                        expect('Khatavkar').to.have.lengthOf.above(2);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Lastname is greater than 2 character :: Khatavkar")];
                    case 4:
                        _e.sent();
                        protractor_1.browser.sleep(3000);
                        return [4, this.vType.click()];
                    case 5:
                        _e.sent();
                        protractor_1.browser.sleep(2000);
                        return [4, this.vDropType.click()];
                    case 6:
                        _e.sent();
                        return [4, this.vAllDropType.count()];
                    case 7:
                        dcount = _e.sent();
                        log4jsconfig_1.log4jsconfig.Log().debug("List of Specialist Type::");
                        i = 0;
                        _e.label = 8;
                    case 8:
                        if (!(i < dcount)) return [3, 12];
                        _b = (_a = log4jsconfig_1.log4jsconfig.Log()).debug;
                        return [4, this.vAllDropType.get(i).getText()];
                    case 9:
                        _b.apply(_a, [_e.sent()]);
                        _d = (_c = console).log;
                        return [4, this.vAllDropType.get(i).getText()];
                    case 10:
                        _d.apply(_c, [_e.sent()]);
                        _e.label = 11;
                    case 11:
                        i++;
                        return [3, 8];
                    case 12:
                        protractor_1.browser.sleep(2000);
                        log4jsconfig_1.log4jsconfig.Log().debug("Enter Fisrt ,last name ,type");
                        return [4, this.saveVenterinans.click()];
                    case 13:
                        _e.sent();
                        log4jsconfig_1.log4jsconfig.Log().debug("Save Veterinarian");
                        return [2];
                }
            });
        });
    };
    VeterinarianPageObject.prototype.newlyAddedVenDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var venDetails, venName, str, FN, LN, fLN, str1, str2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, protractor_1.browser.wait(expCondition.visibilityOf(this.venList), 20000, 'Taking too long to load')];
                    case 1:
                        _a.sent();
                        venDetails = this.venList.all(protractor_1.by.tagName('tr')).last();
                        return [4, protractor_1.browser.actions().mouseMove(venDetails).perform()];
                    case 2:
                        _a.sent();
                        return [4, venDetails.getText()];
                    case 3:
                        venName = _a.sent();
                        str = venName.split(' ');
                        FN = str[0];
                        LN = str[1];
                        fLN = LN.split('\n');
                        str1 = fLN[0];
                        str2 = fLN[1];
                        console.log(str);
                        console.log(fLN);
                        return [4, protractor_1.browser.wait(expCondition.elementToBeClickable(venDetails), 20000, 'Element taking too long to appear in the DOM')];
                    case 4:
                        _a.sent();
                        return [4, expect('Smita').to.equal(FN)];
                    case 5:
                        _a.sent();
                        return [4, expect('Khatavkar').to.equal(str1)];
                    case 6:
                        _a.sent();
                        return [4, expect('Radiology').to.equal(str2)];
                    case 7:
                        _a.sent();
                        log4jsconfig_1.log4jsconfig.Log().debug("Added Veterinarians Details verify ::" + FN + " " + str1 + " " + str2);
                        return [2];
                }
            });
        });
    };
    VeterinarianPageObject.prototype.clickVenBackButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        return [4, this.backButton1.getAttribute('innerText')];
                    case 1:
                        back = _a.sent();
                        expect('< Back').to.equal(back);
                        return [4, this.backButton1.click()];
                    case 2:
                        _a.sent();
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Click on Back Button verify ::" + back)];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return VeterinarianPageObject;
}());
exports.VeterinarianPageObject = VeterinarianPageObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmV0ZXJpbmFyaWFuUGFnZU9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvdmV0ZXJpbmFyaWFuUGFnZU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBc0U7QUFDdEUsdURBQXNEO0FBQzlDLElBQUEsTUFBTSxHQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBcEIsQ0FBcUI7QUFFbkMsSUFBSSxZQUFZLEdBQUcsK0JBQWtCLENBQUM7QUFHdEM7SUFBQTtRQUNZLG1CQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxtQkFBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7UUFDakUscUJBQWdCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUNqRSxlQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDekMsY0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLFVBQUssR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN4QyxjQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUMxRCxpQkFBWSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQzFELG9CQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENB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