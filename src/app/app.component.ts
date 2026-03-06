import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  menuOpen = false;
  currentLanguage = 'pt';

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  changeLanguage(language: string): void {
    this.currentLanguage = language;
    // Implementação de mudança de idioma virá aqui
  }
}
