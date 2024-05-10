import { Component } from '@angular/core';
import { HeadBarComponent } from '../grid/head-bar/head-bar.component';
import { BodyComponent } from '../grid/body/body.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeadBarComponent, BodyComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
