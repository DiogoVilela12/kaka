import { Component } from '@angular/core';
import { QuestionsComponent } from "../questions/questions.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-often-questions',
  standalone: true,
  imports: [QuestionsComponent, ButtonComponent],
  templateUrl: './often-questions.component.html',
  styleUrl: './often-questions.component.scss'
})
export class OftenQuestionsComponent {

}
