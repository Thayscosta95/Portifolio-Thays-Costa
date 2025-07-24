import { Component } from '@angular/core';
import { TecnologiasComponent } from '../tecnologias/tecnologias.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TecnologiasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
