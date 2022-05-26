import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pattern = "(https|http|ftp):\/\/|(\w+\.|www.|(\w+:))(\w+)|(\/|-|_|/+|%|&|/+%)(\w+)|\/?\w+|=\w+|(\/)|(\.\w+)";

  public onUserInput(event: any) {
    console.log(event.target.value)
  }

}
