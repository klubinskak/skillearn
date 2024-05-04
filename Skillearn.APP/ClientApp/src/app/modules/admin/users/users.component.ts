import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../models/users';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { UserService } from '../../../services/user.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TableModule, InputTextModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users!: UserModel[];

  loading: boolean = true;

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.userService.getAllUsers().subscribe((res) => {
      if (res) {
        this.users = res;
        this.loading = false;
      }
    })
  }

  getEventValue($event: any): string {
    return $event.target.value;
  }

  clear(table: Table) {
    table.clear();
  }

  navigate(user: UserModel) {
    this.router.navigate(['/admin/users/manage'], { state: { user: user } });
  }

}
