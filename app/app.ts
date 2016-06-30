import { Component, Input, Output } from "@angular/core";
import { FORM_DIRECTIVES } from '@angular/common';
import { bootstrap } from "@angular/platform-browser-dynamic";

@Component({
  selector: 'lightbulb',
  inputs: ['type', 'name', 'conversionRate', 'imageUrl'],
  template: `
   <section id="{{ type }}">
    <div>
      <h4>{{ name }}</h4>
      <p>{{ calculateWattage() }}</p>
      <p>{{ calculateCost() }}</p>
    </div>
  </section>
  `
})

class Lightbulb {

  type: string;
  name: string;
  conversionRate: number;
  imageUrl: string;

  constructor() {
    console.log('In bulb item');
  }

  calculateWattage(): number {
    return 42.0;
  }

  calculateCost(): number {
    return 19.72;
  }

}

@Component({
  selector: 'lightbulb-form',
  template: `
    <form>
      <div>
        <h4>Lumens</h4>
        <p>Brightness <br />of Bulb</p>
        <select>
        </select>
      </div>
      <div>
        <h4>kWh</h4>
        <p>Kilowatt-<br />hour Cost</p>
        <input type="number" value="10" />
      </div>
      <div>
        <h4>Hours</h4>
        <p>Usage <br />per Day</p>
        <input type="number" value="10" />
      </div>
    </form>
  `,
  directives: [FORM_DIRECTIVES]
})

class FormComponent {}

@Component ({
  selector: 'lightbulb-app',
  //templateUrl: 'app/LightbulbApp.html',
  template: `
    <div>
      <lightbulb *ngFor="let bulbInfo of bulbTypes"
        [type]="bulbInfo.shortName"
        [name]="bulbInfo.name"
        [conversionRate]="bulbInfo.conversionRate"
        [imageUrl]="bulbInfo.imageUrl">
      </lightbulb>
      <lightbulb-form></lightbulb-form>
    </div>
  `,
  outputs: ['bulbTypes'],
  directives: [FormComponent, Lightbulb]
})

class LightbulbApp {

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

  constructor() {
    console.log('In app');
    console.log(this.bulbTypes);
  }
}

bootstrap(LightbulbApp);