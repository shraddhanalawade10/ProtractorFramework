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
exports.HomePageObject = void 0;
var protractor_1 = require("protractor");
var expCondition = protractor_1.ExpectedConditions;
var HomePageObject = (function () {
    function HomePageObject() {
        this.welcomeMsg = protractor_1.element(protractor_1.by.css("app-welcome h1"));
        this.homeMenu = protractor_1.element(protractor_1.by.css("[ng-reflect-router-link='welcome']"));
        this.owners = protractor_1.element(protractor_1.by.css("ul.navbar-nav li.dropdown:nth-child(2)"));
        this.veterinarians = protractor_1.element(protractor_1.by.css("ul.navbar-nav li.dropdown:nth-child(3)"));
        this.petTypes = protractor_1.element(protractor_1.by.css('ul.nav.navbar-nav>li:nth-child(4)'));
        this.specialties = protractor_1.element(protractor_1.by.css("[routerlink='/specialties']"));
        this.addNewOwner = protractor_1.element(protractor_1.by.css("[routerlink='/owners/add']"));
        this.allVeterinarians = protractor_1.element(protractor_1.by.css("[ng-reflect-router-link='/vets']"));
        this.allOwner = protractor_1.element(protractor_1.by.css('ul.dropdown-menu>li:nth-child(1)>a'));
        this.addVetButton = protractor_1.element(protractor_1.by.css('[href="/petclinic/vets/add"]'));
    }
    HomePageObject.prototype.openBrowser = function (url) {
        protractor_1.browser.get(url);
        protractor_1.browser.wait(expCondition.presenceOf(this.welcomeMsg), 10000);
    };
    HomePageObject.prototype.getPageTitle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, protractor_1.browser.getTitle()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    HomePageObject.prototype.displayWelcomeMsg = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.welcomeMsg.isDisplayed()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    HomePageObject.prototype.getHomeMenuText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.homeMenu.getText()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    HomePageObject.prototype.getOwnersText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.owners.getText()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    HomePageObject.prototype.getVeterinariansText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.veterinarians.getText()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    HomePageObject.prototype.getPetTypesText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.petTypes.getText()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    HomePageObject.prototype.getSpecialtiesText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.specialties.getText()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    HomePageObject.prototype.clickOwnersMenu = function () {
        return this.owners.click();
    };
    HomePageObject.prototype.clickOwnersAllMenu = function () {
        return this.allOwner.click();
    };
    HomePageObject.prototype.clickAddNewOwner = function () {
        return this.addNewOwner.click();
    };
    HomePageObject.prototype.clickPetTypesMenu = function () {
        return this.petTypes.click();
    };
    HomePageObject.prototype.clickAddPetTypeButton = function () {
        return this.addVetButton.click();
    };
    HomePageObject.prototype.clickVeterinariansMenu = function () {
        return this.veterinarians.click();
    };
    HomePageObject.prototype.clickAllVeterinariansMenu = function () {
        return this.allVeterinarians.click();
    };
    HomePageObject.prototype.clickAddNewVet = function () {
        return this.addVetButton.click();
    };
    return HomePageObject;
}());
exports.HomePageObject = HomePageObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2VPYmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L2hvbWVQYWdlT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF5RztBQUV6RyxJQUFJLFlBQVksR0FBRywrQkFBa0IsQ0FBQztBQUV0QztJQUFBO1FBQ1ksZUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDL0MsYUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUM7UUFDakUsV0FBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7UUFDbkUsa0JBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLGFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLGdCQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztRQUM3RCxnQkFBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDNUQscUJBQWdCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztRQUN2RSxhQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxpQkFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4QkFB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