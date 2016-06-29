import { Component } from "@angular/core";
import { bootstrap } from "@angular/platform-browser-dynamic";
import { FormComponent } from "./form.component";

@Component ({
  selector: 'lightbulb-app',
  templateUrl: 'app/LightbulbApp.html',
  directives: [FormComponent],
})

class LightbulbApp { }

bootstrap(LightbulbApp);