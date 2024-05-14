import { compileClassDebugInfo } from '@angular/compiler';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { Livro } from './models/livro';
import { LivroslistComponent } from './components/livro/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './components/livro/livrosdetails/livrosdetails.component';
import { AutorlistComponent } from './components/autor/autorlist/autorlist.component';
import { EditoralistComponent } from './components/editora/editoralist/editoralist.component';
import { AutordetailsComponent } from './components/autor/autordetails/autordetails.component';
import { EditoradetailsComponent } from './components/editora/editoradetails/editoradetails.component';

export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {path: "admin", component: PrincipalComponent, children: [

        {path: "livro", component: LivroslistComponent},
        {path: "livro/new", component: LivrosdetailsComponent},
        {path: "livro/edit/:id", component: LivrosdetailsComponent},

        {path: "editora", component: EditoralistComponent},
        {path: "editora/new", component: EditoradetailsComponent},
        {path: "editora/edit/:id", component: EditoradetailsComponent},

        {path: "autor", component: AutorlistComponent},
        {path: "autor/new", component: AutordetailsComponent},
        {path: "autor/edit/:id", component: AutordetailsComponent},
    ]}
];
