import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out')
      ]),
      transition('* => void', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class HomeComponent {
  selectedArea: string | null = null;

  constructor(private router: Router, private lang: LanguageService) {}

  selectArea(area: string): void {
    this.selectedArea = this.selectedArea === area ? null : area;
  }

  navigateToProjects(): void {
    this.router.navigate(['/projetos']);
  }

  downloadCV(): void {
    if (!this.selectedArea) return;

    const cvFiles = {
      front: 'Desenvolvedora Fron end - Thays Silva Costa.pdf',
      back: 'Desenvolvedora back end - Thays Silva Costa.pdf',
      fullstack: 'Desenvolvedora fullstack - Thays Silva Costa.pdf'
    };

    const fileName = cvFiles[this.selectedArea as keyof typeof cvFiles];
    if (fileName) {
      const link = document.createElement('a');
      link.href = `/${fileName}`;
      link.download = fileName;
      link.click();
    }
  }

  get areaInfo() {
    const areas = {
      front: {
        title: 'Front-end',
        description: this.lang.translate('area.front.description'),
        skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'Responsive Design']
      },
      back: {
        title: 'Back-end',
        description: this.lang.translate('area.back.description'),
        skills: ['JavaScript', 'Node.js', 'REST APIs', 'Git/GitHub', 'Metodologias Ágeis']
      },
      fullstack: {
        title: 'Full-Stack',
        description: this.lang.translate('area.fullstack.description'),
        skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'Node.js', 'APIs', 'Git']
      }
    };
    return areas[this.selectedArea as keyof typeof areas] || null;
  }
}
