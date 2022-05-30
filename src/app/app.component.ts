import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // you can put your custom pattern otherwise it will be using the default one
  public pattern = "";

  public onUserInput(event: any) {
    console.log(event)
  }

}
