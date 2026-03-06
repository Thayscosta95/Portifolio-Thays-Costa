import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-sobre-mim',
  standalone: true,
  imports: [RouterModule, TranslatePipe],
  templateUrl: './sobre-mim.component.html',
  styleUrl: './sobre-mim.component.css'
})
export class SobreMimComponent {

}
