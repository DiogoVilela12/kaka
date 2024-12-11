import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
    
    @Input() globalAnswer!: string;
    @Input() globalQuestion!: string;
    @Input() idQuestion!: number;
 
    showAnswer(idQuestion: number) {
        const answer = document.getElementsByClassName('answer')[idQuestion] as HTMLElement;
        const question = document.getElementsByClassName('question')[idQuestion] as HTMLElement;

        if(!answer.classList.contains('active')) {
            answer.classList.add('active');
            question.classList.add('border');
        } else {
            answer.classList.remove('active')
            question.classList.remove('border')
        }
    }
}
