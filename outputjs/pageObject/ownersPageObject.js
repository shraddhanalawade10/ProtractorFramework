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
exports.OwnersPageObject = void 0;
var protractor_1 = require("protractor");
var log4jsconfig_1 = require("../config/log4jsconfig");
var expect = require('chai').expect;
var expCondition = protractor_1.ExpectedConditions;
var OwnersPageObject = (function () {
    function OwnersPageObject() {
        this.firstname = protractor_1.element(protractor_1.by.id('firstName'));
        this.lastname = protractor_1.element(protractor_1.by.id('lastName'));
        this.address = protractor_1.element(protractor_1.by.id('address'));
        this.city = protractor_1.element(protractor_1.by.id('city'));
        this.telephone = protractor_1.element(protractor_1.by.id('telephone'));
        this.addOwnerButton = protractor_1.element(protractor_1.by.buttonText('Add Owner'));
        this.allOwner = protractor_1.element(protractor_1.by.css('ul.dropdown-menu>li:nth-child(1)>a'));
        this.ownerName = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Saniya Bhaldar')]"));
        this.addOwnerFromOwnersPage = protractor_1.element(protractor_1.by.buttonText('Add Owner'));
        this.ownersBackButton = protractor_1.element(protractor_1.by.className("btn btn-default"));
    }
    OwnersPageObject.prototype.addNewOwnerDetails = function (_a) {
        var FirstName = _a.FirstName, LastName = _a.LastName, Address = _a.Address, City = _a.City, Telephone = _a.Telephone;
        return __awaiter(this, void 0, void 0, function () {
            var status, status1, b;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.addOwnerButton.isEnabled()];
                    case 1:
                        status = _b.sent();
                        expect(status).to.equal(false);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Add Button is disabled")];
                    case 2:
                        _b.sent();
                        return [4, this.firstname.sendKeys(FirstName)];
                    case 3:
                        _b.sent();
                        expect(FirstName).to.have.lengthOf.above(2);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Firstname is greater than 2 characters :- " + FirstName)];
                    case 4:
                        _b.sent();
                        return [4, this.lastname.sendKeys(LastName)];
                    case 5:
                        _b.sent();
                        expect(LastName).to.have.lengthOf.above(2);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Lastname is greater than 2 characters :- " + LastName)];
                    case 6:
                        _b.sent();
                        return [4, this.address.sendKeys(Address)];
                    case 7:
                        _b.sent();
                        expect(Address).to.have.lengthOf.above(2);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Address is greater than 2 characters :- " + Address)];
                    case 8:
                        _b.sent();
                        return [4, this.city.sendKeys(City)];
                    case 9:
                        _b.sent();
                        expect(City).to.have.lengthOf.above(2);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("City is greater than 2 characters :- " + City)];
                    case 10:
                        _b.sent();
                        return [4, this.telephone.sendKeys(Telephone)];
                    case 11:
                        _b.sent();
                        expect(Telephone).to.have.lengthOf(10);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Telephone Number is of 10 digits :- " + Telephone)];
                    case 12:
                        _b.sent();
                        return [4, this.addOwnerButton.isEnabled()];
                    case 13:
                        status1 = _b.sent();
                        expect(status1).to.equal(true);
                        return [4, log4jsconfig_1.log4jsconfig.Log().debug("Add Button is enabled now :- ")];
                    case 14:
                        _b.sent();
                        return [4, this.addOwnerButton.click()];
                    case 15:
                        _b.sent();
                        return [4, this.addOwnerButton.getAttribute('innerText')];
                    case 16:
                        b = _b.sent();
                        console.log("Save New Owner :- " + b);
                        log4jsconfig_1.log4jsconfig.Log().debug("Save New Owner button verification :- " + b);
                        return [2];
                }
            });
        });
    };
    OwnersPageObject.prototype.clickAllOwnersMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.allOwner.click()];
            });
        });
    };
    OwnersPageObject.prototype.clickOwnerName = function () {
        this.ownerName.click();
    };
    OwnersPageObject.prototype.waitBrowser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, protractor_1.browser.wait(expCondition.presenceOf(this.ownerName), 10000)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    OwnersPageObject.prototype.clickAddOwnerFromOwnersPage = function () {
        return this.addOwnerFromOwnersPage.click();
    };
    OwnersPageObject.prototype.clickOwnersBackButton = function () {
        return this.ownersBackButton.click();
    };
    return OwnersPageObject;
}());
exports.OwnersPageObject = OwnersPageObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3duZXJzUGFnZU9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3Qvb3duZXJzUGFnZU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBc0U7QUFDdEUsdURBQXNEO0FBQzlDLElBQUEsTUFBTSxHQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBcEIsQ0FBcUI7QUFFbkMsSUFBSSxZQUFZLEdBQUcsK0JBQWtCLENBQUM7QUFFdEM7SUFBQTtRQUVZLGNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN4QyxhQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsWUFBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLFNBQUksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM5QixjQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsbUJBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNyRCxhQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQTtRQUNoRSxjQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQztRQUN4RSwyQkFBc0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FB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