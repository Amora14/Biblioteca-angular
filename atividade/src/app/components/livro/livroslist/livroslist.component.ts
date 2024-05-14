import { Component } from '@angular/core';
import { Livro } from '../../../models/livro';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-livroslist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './livroslist.component.html',
  styleUrl: './livroslist.component.scss'
})
export class LivroslistComponent {

  lista: Livro[] = [];

  constructor(){
    this.lista.push(new Livro(1, 'Harry Potter'));
    this.lista.push(new Livro(2, 'Maze Runner'));
    this.lista.push(new Livro(3, 'A culpa é das estrelas'));
  }

  deletar(){

  }
}
