import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head-bar',
  standalone: true,
  imports: [],
  templateUrl: './head-bar.component.html',
  styleUrl: './head-bar.component.scss'
})
export class HeadBarComponent {

  
  constructor(private router: Router) {
    
  }

  navigateTo(link: any){
    this.router.navigate([link])
  }
}
