
@Component({
  selector: 'lightbulb',
  template: `
   <section id="{{ type }}">
    <div>
      <h4>{{ bulbInfo.name }}</h4>
      <p>{{ calculateWattage() }}</p>
      <p>{{ calculateCost() }}</p>
    </div>
  </section>
  `
})

export class Lightbulb {

  type: string;
  bulbInfo: Object;

  constructor(type: string, bulbInfo) {
    this.type = type;
    this.bulbInfo = bulbInfo;
  }

  calculateWattage() {
    return 42.0;
  }

  calculateCost() {
    return 19.72;
  }

}