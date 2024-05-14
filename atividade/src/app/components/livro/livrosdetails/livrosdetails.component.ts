import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Livro } from '../../../models/livro';

@Component({
  selector: 'app-livrosdetails',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './livrosdetails.component.html',
  styleUrl: './livrosdetails.component.scss'
})
export class LivrosdetailsComponent {

  livro: Livro = new Livro(0, "");

  save(){
    alert('Salvo com sucesso!');
  }

}
