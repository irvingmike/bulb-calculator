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
var Lightbulb = (function () {
    function Lightbulb(type, bulbInfo) {
        this.type = type;
        this.bulbInfo = bulbInfo;
    }
    Lightbulb.prototype.calculateWattage = function () {
        return 42.0;
    };
    Lightbulb.prototype.calculateCost = function () {
        return 19.72;
    };
    Lightbulb = __decorate([
        Component({
            selector: 'lightbulb',
            template: "\n   <section id=\"{{ type }}\">\n    <div>\n      <h4>{{ bulbInfo.name }}</h4>\n      <p>{{ calculateWattage() }}</p>\n      <p>{{ calculateCost() }}</p>\n    </div>\n  </section>\n  "
        }), 
        __metadata('design:paramtypes', [String, Object])
    ], Lightbulb);
    return Lightbulb;
}());
exports.Lightbulb = Lightbulb;
//# sourceMappingURL=bulb.component.js.map