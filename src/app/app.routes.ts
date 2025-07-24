import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProjetosComponent } from './componentes/projetos/projetos.component';
import { HomeComponent } from './componentes/home/home.component';
import { SobreMimComponent } from './componentes/sobre-mim/sobre-mim.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { ConversorMoedasComponent } from './componentes/projetos/ver-projetos/conversor-moedas/conversor-moedas.component';
import { JokenpoComponent } from './componentes/projetos/ver-projetos/jokenpo/jokenpo.component';
import { MarioServicosComponent } from './componentes/projetos/ver-projetos/mario-servicos/mario-servicos.component';
import { MemotecaComponent } from './componentes/projetos/ver-projetos/memoteca/memoteca.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'projetos',
    component: ProjetosComponent
  },
  {
    path: 'sobre',
    component: SobreMimComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'ver-projetos/conversor-moedas',
    component: ConversorMoedasComponent
  },
  {
    path: 'ver-projetos/jokenpo',
    component: JokenpoComponent
  },
  {
    path: 'ver-projetos/mario-servicos',
    component: MarioServicosComponent
  },
  {
    path: 'ver-projetos/memoteca',
    component: MemotecaComponent
  },
  

];
