import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardmenu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardmenu.component.html',
  styleUrl: './cardmenu.component.scss'
})
export class CardmenuComponent {

  constructor(private router: Router) {
    
  }

  cards: any[] = 
    [
    {nome: 'Clientes', image: '../../../../assets/cliente.png', link: 'clientes'},
    {nome: 'Veículos', image: '../../../../assets/carro-compacto.png', link: 'listcar'},
    {nome: 'Financeiro',image: '../../../../assets/financeiro.png', link: 'financial'},
    ]

    navigateTo(link: string){
      this.router.navigateByUrl(link);
    }

}
