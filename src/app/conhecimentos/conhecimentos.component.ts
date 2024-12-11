import { Component } from '@angular/core';
import { FlipCardComponent } from "../flip-card/flip-card.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-conhecimentos',
  standalone: true,
  imports: [FlipCardComponent, ButtonComponent],
  templateUrl: './conhecimentos.component.html',
  styleUrl: './conhecimentos.component.scss'
})
export class ConhecimentosComponent {

}
