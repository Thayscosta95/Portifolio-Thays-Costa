import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { LanguageService, SupportedLang } from './services/language.service';
import { TranslatePipe } from './pipes/translate.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, TranslatePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  menuOpen = false;

  constructor(private router: Router, private lang: LanguageService) {}

  get currentLanguage(): SupportedLang {
    return this.lang.current;
  }

  get showBackground(): boolean {
    const url = this.router.url || '';
    return !(url === '/' || url.startsWith('/home'));
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  changeLanguage(language: string): void {
    // delegate to language service
    this.lang.setLanguage(language as SupportedLang);
  }
}
