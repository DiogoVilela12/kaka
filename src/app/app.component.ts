import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { DiffComponent } from "./diff/diff.component";
import { ProsComponent } from "./pros/pros.component";
import { ConhecimentosComponent } from "./conhecimentos/conhecimentos.component";
import { FooterComponent } from "./footer/footer.component";
import { OftenQuestionsComponent } from "./often-questions/often-questions.component";
import { IntroComponent } from "./intro/intro.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, DiffComponent, ProsComponent, ConhecimentosComponent, FooterComponent, OftenQuestionsComponent, IntroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kaka';
}
