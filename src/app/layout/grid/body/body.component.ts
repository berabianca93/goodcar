import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CardmenuComponent } from '../cardmenu/cardmenu.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CardmenuComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
;
}
