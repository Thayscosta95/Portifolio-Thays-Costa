import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type SupportedLang = 'pt' | 'en' | 'es';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private langSubject = new BehaviorSubject<SupportedLang>('pt');

  // basic translation dictionary, expand as needed
  private translations: Record<SupportedLang, Record<string, string>> = {
    pt: {
      'home.greeting': 'Seja bem-vindo(a) ao meu portfólio!',
      'home.subtitle': 'Encontre seu perfil ideal',
      'button.front': 'Front-end',
      'area.front.description': 'Como desenvolvedora Front-end, atuo na criação de interfaces modernas e responsivas, focando sempre na melhor experiência do usuário (UX/UI). Utilizo HTML, CSS, JavaScript e Angular/TypeScript para desenvolver aplicações dinâmicas e performáticas.',
      'area.back.description': 'No Back-end, possuo experiência sólida com JavaScript e Node.js, desenvolvendo APIs robustas e escaláveis. Trabalho com boas práticas de desenvolvimento, versionamento de código e metodologias ágeis para entregar soluções de qualidade.',
      'area.fullstack.description': 'Como desenvolvedora Full-Stack, tenho a capacidade de atuar em todo o ciclo de desenvolvimento: desde a criação de interfaces atraentes no Front-end até desenvolvimento robusto no Back-end. Isso me permite ter uma visão holística dos projetos e entregar soluções completas e integradas.',
      'button.back': 'Back-end',
      'button.fullstack': 'Full-Stack',
      'button.viewProjects': 'Ver Projetos',
      'button.downloadCV': 'Baixar CV',
      'about.title': 'Sobre Mim',
      'nav.home': 'Início',
      'nav.projects': 'Projetos',
      'nav.about': 'Sobre Mim',
      'nav.contact': 'Contato',
      // add other keys here
    },
    en: {
      'home.greeting': 'Welcome to my portfolio!',
      'home.subtitle': 'Find your ideal profile',
      'button.front': 'Front-end',
      'area.front.description': 'As a Front-end developer, I create modern responsive interfaces, always focusing on the best user experience (UX/UI). I use HTML, CSS, JavaScript, and Angular/TypeScript to build dynamic, high-performance applications.',
      'area.back.description': 'On the Back-end, I have solid experience with JavaScript and Node.js, developing robust, scalable APIs. I follow good coding practices, version control, and agile methodologies to deliver quality solutions.',
      'area.fullstack.description': 'As a Full-Stack developer, I can work across the entire development cycle: from crafting attractive front-end interfaces to building reliable back-end systems. This gives me a holistic view of projects and enables me to deliver integrated, complete solutions.',
      'button.back': 'Back-end',
      'button.fullstack': 'Full-Stack',
      'button.viewProjects': 'View Projects',
      'button.downloadCV': 'Download CV',
      'about.title': 'About Me',
      'nav.home': 'Home',
      'nav.projects': 'Projects',
      'nav.about': 'About',
      'nav.contact': 'Contact',
    },
    es: {
      'home.greeting': '¡Bienvenido(a) a mi portafolio!',
      'home.subtitle': 'Encuentra tu perfil ideal',
      'button.front': 'Front-end',
      'area.front.description': 'Como desarrolladora Front-end, creo interfaces modernas y responsivas, siempre enfocándome en la mejor experiencia de usuario (UX/UI). Utilizo HTML, CSS, JavaScript y Angular/TypeScript para desarrollar aplicaciones dinámicas y de alto rendimiento.',
      'area.back.description': 'En el Back-end, tengo experiencia sólida con JavaScript y Node.js, desarrollando APIs robustas y escalables. Trabajo con buenas prácticas de desarrollo, control de versiones y metodologías ágiles para entregar soluciones de calidad.',
      'area.fullstack.description': 'Como desarrolladora Full-Stack, puedo trabajar en todo el ciclo de desarrollo: desde crear interfaces front-end atractivas hasta construir sistemas back-end confiables. Esto me brinda una visión holística de los proyectos y me permite entregar soluciones completas e integradas.',
      'button.back': 'Back-end',
      'button.fullstack': 'Full-Stack',
      'button.viewProjects': 'Ver Proyectos',
      'button.downloadCV': 'Descargar CV',
      'about.title': 'Sobre Mí',
      'nav.home': 'Início',
      'nav.projects': 'Projetos',
      'nav.about': 'Sobre Mim',
      'nav.contact': 'Contato',
    }
  };

  setLanguage(lang: SupportedLang) {
    this.langSubject.next(lang);
  }

  get current(): SupportedLang {
    return this.langSubject.getValue();
  }

  get currentLanguage$(): Observable<SupportedLang> {
    return this.langSubject.asObservable();
  }

  translate(key: string): string {
    const lang = this.langSubject.getValue();
    return this.translations[lang][key] || key;
  }
}