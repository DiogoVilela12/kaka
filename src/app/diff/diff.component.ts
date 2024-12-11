import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-diff',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './diff.component.html',
  styleUrl: './diff.component.scss'
})
export class DiffComponent {

}
