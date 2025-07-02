import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogInComponent } from "../log-in/log-in.component";

@Component({
  selector: 'app-menus',
  imports: [RouterModule, LogInComponent],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})
export class MenusComponent {

}
