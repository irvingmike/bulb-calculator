import { Component, Input, Output } from "@angular/core";
import { FORM_DIRECTIVES } from '@angular/common';
import { bootstrap } from "@angular/platform-browser-dynamic";

class CurrentSettings {
  bulbTypes = [
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
  ]
  lumenOptions = [375, 600, 900, 1600];
  lumens: number;
  cost: number;
  hours: number;

  constructor() {
    this.lumens = 600;
    this.cost = 12;
    this.hours = 3;
  }
}

@Component({
  selector: 'lightbulb',
  inputs: ['type', 'name', 'conversionRate', 'imageUrl', 'currentSettings'],
  template: `
   <section id="{{ type }}">
    <div>
      <h4>{{ name }}</h4>
      <p>{{ calculateWattage().toFixed(1) }}</p>
      <p>{{ calculateCost().toFixed(2) }}</p>
    </div>
  </section>
  `
})

class Lightbulb {

  type: string;
  name: string;
  conversionRate: number;
  imageUrl: string;
  totalDays = 365;
  currentSettings: CurrentSettings;

  constructor() {
    console.log('In bulb item');
  }

  calculateWattage(): number {
    return (this.conversionRate * this.currentSettings.lumens);
  }

  calculateCost(): number {
    var totalHours = this.currentSettings.hours * this.totalDays;
    var cost = this.currentSettings.cost / 100;
    return ((this.calculateWattage() * totalHours) / 1000) * cost;
  }

}

@Component({
  selector: 'lightbulb-form',
  inputs: ['currentSettings'],
  template: `
    <form>
      <div>
        <h4>Lumens</h4>
        <p>Brightness <br />of Bulb</p>
        <select [(ngModel)]="currentSettings.lumens">
          <option *ngFor="let lumenOption of currentSettings.lumenOptions"
              [value]="lumenOption">
            {{ lumenOption }}
          </option>
        </select>
      </div>
      <div>
        <h4>kWh</h4>
        <p>Kilowatt-<br />hour Cost</p>
        <input type="number" [(ngModel)]="currentSettings.cost" /> cents
      </div>
      <div>
        <h4>Hours</h4>
        <p>Usage <br />per Day</p>
        <input type="number" [(ngModel)]="currentSettings.hours" />
      </div>
    </form>
  `,
  directives: [FORM_DIRECTIVES]
})

class FormComponent {

  currentSettings: CurrentSettings;

  onCostChange(cost) {
    console.log(cost);
  }
}

@Component ({
  selector: 'lightbulb-app',
  //templateUrl: 'app/LightbulbApp.html',
  template: `
    <div>
      <lightbulb *ngFor="let bulbInfo of currentSettings.bulbTypes"
        [type]="bulbInfo.shortName"
        [name]="bulbInfo.name"
        [conversionRate]="bulbInfo.conversionRate"
        [imageUrl]="bulbInfo.imageUrl"
        [currentSettings]="currentSettings"
        >
      </lightbulb>
      <lightbulb-form [currentSettings]="currentSettings"></lightbulb-form>
    </div>
  `,
  outputs: ['bulbTypes'],
  directives: [FormComponent, Lightbulb]
})

class LightbulbApp {

  currentSettings: CurrentSettings;

  constructor() {
    console.log('In app');
    console.log(this.bulbTypes);
    this.currentSettings = new CurrentSettings();
  }
}

bootstrap(LightbulbApp);