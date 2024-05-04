import { Component, OnInit, ViewChild } from '@angular/core';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';


@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [SidebarModule, ButtonModule, AvatarModule, PanelMenuModule, CommonModule, MenuModule, BadgeModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent implements OnInit {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  items: MenuItem[] = [];

  public sidebarVisible = true;



  ngOnInit(): void {
    this.items = [
      {
        label: 'Home', icon: 'pi pi-fw pi-home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
          {
            label: 'Courses', icon: 'pi pi-fw pi-book', routerLink: ['/courses'] },

        ]
      },
      {
        label: 'Admin', icon: 'pi pi-fw pi-cog',
        items: [
          { label: 'Users', icon: 'pi pi-fw pi-user', routerLink: ['/admin/users'] },
          { label: 'Courses Assigment', icon: 'pi pi-fw pi-briefcase', routerLink: ['/admin/courses-assigment'] }
        ]
      }
    ]

    console.log(this.items);

  }
}
