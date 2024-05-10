import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../../../services/firebase.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-car',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-car.component.html',
  styleUrl: './list-car.component.scss'
})
export class ListCarComponent implements OnInit {

  item$!: Observable<any[]>;

  modelo?: string;
  placa?: string;
  valor?: string;
  negociado?: string;


  constructor(
    private firestore: FirestoreService
  ) {
  }

  ngOnInit(): void {
    this.item$ = this.firestore.getList('carros')
  }

  insertCar(){
    let body = 
    {
      cliente: '',
      modelo: this.modelo,
      placa: this.placa,
      valor: this.valor,
      negociado: this.negociado
    }
    this.firestore.insertDoc('carros', this.modelo!, body);
    console.log(body)
  }


}
