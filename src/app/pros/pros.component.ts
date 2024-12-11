import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-pros',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './pros.component.html',
  styleUrl: './pros.component.scss'
})
export class ProsComponent {

}
