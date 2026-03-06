import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { LanguageService } from '../../services/language.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    TranslatePipe,     
    RouterModule
  ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

}
