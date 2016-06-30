"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var CurrentSettings = (function () {
    function CurrentSettings() {
        this.bulbTypes = [
            { shortName: 'inc',
                name: 'Incandescent',
                conversionRate: .0625,
                imageUrl: '../images/bulb_inc.svg' },
            { shortName: 'hal',
                name: 'Halogen',
                conversionRate: .0450,
                imageUrl: '../images/bulb_hal.svg' },
            { shortName: 'cfl',
                name: 'CFL',
                conversionRate: .0146,
                imageUrl: '../images/bulb_cfl.svg' },
            { shortName: 'led',
                name: 'LED',
                conversionRate: .0125,
                imageUrl: '../images/bulb_led.svg' }
        ];
        this.lumenOptions = [375, 600, 900, 1600];
        this.lumens = 600;
        this.cost = 12;
        this.hours = 3;
    }
    return CurrentSettings;
}());
var Lightbulb = (function () {
    function Lightbulb() {
        this.totalDays = 365;
        console.log('In bulb item');
    }
    Lightbulb.prototype.calculateWattage = function () {
        return (this.conversionRate * this.currentSettings.lumens);
    };
    Lightbulb.prototype.calculateCost = function () {
        var totalHours = this.currentSettings.hours * this.totalDays;
        var cost = this.currentSettings.cost / 100;
        return ((this.calculateWattage() * totalHours) / 1000) * cost;
    };
    Lightbulb = __decorate([
        core_1.Component({
            selector: 'lightbulb',
            inputs: ['type', 'name', 'conversionRate', 'imageUrl', 'currentSettings'],
            template: "\n   <section id=\"{{ type }}\">\n    <div>\n      <h4>{{ name }}</h4>\n      <p>{{ calculateWattage().toFixed(1) }}</p>\n      <p>{{ calculateCost().toFixed(2) }}</p>\n    </div>\n  </section>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Lightbulb);
    return Lightbulb;
}());
var FormComponent = (function () {
    function FormComponent() {
    }
    FormComponent.prototype.onCostChange = function (cost) {
        console.log(cost);
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'lightbulb-form',
            inputs: ['currentSettings'],
            template: "\n    <form>\n      <div>\n        <h4>Lumens</h4>\n        <p>Brightness <br />of Bulb</p>\n        <select [(ngModel)]=\"currentSettings.lumens\">\n          <option *ngFor=\"let lumenOption of currentSettings.lumenOptions\"\n              [value]=\"lumenOption\">\n            {{ lumenOption }}\n          </option>\n        </select>\n      </div>\n      <div>\n        <h4>kWh</h4>\n        <p>Kilowatt-<br />hour Cost</p>\n        <input type=\"number\" [(ngModel)]=\"currentSettings.cost\" /> cents\n      </div>\n      <div>\n        <h4>Hours</h4>\n        <p>Usage <br />per Day</p>\n        <input type=\"number\" [(ngModel)]=\"currentSettings.hours\" />\n      </div>\n    </form>\n  ",
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
var LightbulbApp = (function () {
    function LightbulbApp() {
        console.log('In app');
        console.log(this.bulbTypes);
        this.currentSettings = new CurrentSettings();
    }
    LightbulbApp = __decorate([
        core_1.Component({
            selector: 'lightbulb-app',
            //templateUrl: 'app/LightbulbApp.html',
            template: "\n    <div>\n      <lightbulb *ngFor=\"let bulbInfo of currentSettings.bulbTypes\"\n        [type]=\"bulbInfo.shortName\"\n        [name]=\"bulbInfo.name\"\n        [conversionRate]=\"bulbInfo.conversionRate\"\n        [imageUrl]=\"bulbInfo.imageUrl\"\n        [currentSettings]=\"currentSettings\"\n        >\n      </lightbulb>\n      <lightbulb-form [currentSettings]=\"currentSettings\"></lightbulb-form>\n    </div>\n  ",
            outputs: ['bulbTypes'],
            directives: [FormComponent, Lightbulb]
        }), 
        __metadata('design:paramtypes', [])
    ], LightbulbApp);
    return LightbulbApp;
}());
platform_browser_dynamic_1.bootstrap(LightbulbApp);
//# sourceMappingURL=app.js.map