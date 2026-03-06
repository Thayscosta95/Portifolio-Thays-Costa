import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
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

  constructor(private router: Router) {}

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
        description: 'Como desenvolvedora Front-end, atuo na criação de interfaces modernas e responsivas, focando sempre na melhor experiência do usuário (UX/UI). Utilizo HTML, CSS, JavaScript e Angular/TypeScript para desenvolver aplicações dinâmicas e performáticas.',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'Responsive Design']
      },
      back: {
        title: 'Back-end',
        description: 'No Back-end, possuo experiência sólida com JavaScript e Node.js, desenvolvendo APIs robustas e escaláveis. Trabalho com boas práticas de desenvolvimento, versionamento de código e metodologias ágeis para entregar soluções de qualidade.',
        skills: ['JavaScript', 'Node.js', 'REST APIs', 'Git/GitHub', 'Metodologias Ágeis']
      },
      fullstack: {
        title: 'Full-Stack',
        description: 'Como desenvolvedora Full-Stack, tenho a capacidade de atuar em todo o ciclo de desenvolvimento: desde a criação de interfaces atraentes no Front-end até desenvolvimento robusto no Back-end. Isso me permite ter uma visão holística dos projetos e entregar soluções completas e integradas.',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'Node.js', 'APIs', 'Git']
      }
    };
    return areas[this.selectedArea as keyof typeof areas] || null;
  }
}
