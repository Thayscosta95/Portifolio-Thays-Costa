import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
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

  constructor(private router: Router) {}

  get showBackground(): boolean {
    // hide on home path ('' or '/home')
    const url = this.router.url || '';
    return !(url === '/' || url.startsWith('/home'));
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  changeLanguage(language: string): void {
    this.currentLanguage = language;
    // Implementação de mudança de idioma virá aqui
  }
}
