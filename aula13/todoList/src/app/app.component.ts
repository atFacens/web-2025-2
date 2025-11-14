import { Component } from '@angular/core';
import { ItemComponent } from "./item/item.component";

@Component({
  selector: 'app-root',
  imports: [ItemComponent],
  // templateUrl: './app.component.html',
  template:'<h1>Boa noite</h1><br><app-item></app-item>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Todo  List';
}
