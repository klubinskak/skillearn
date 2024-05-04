import { Component } from '@angular/core';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SideMenuComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
