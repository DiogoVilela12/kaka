import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  standalone: true,
  imports: [],
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.scss'
})
export class FlipCardComponent {

@Input() img: string | undefined;
@Input() title: string | undefined;
@Input() descricao: string | undefined;
}
