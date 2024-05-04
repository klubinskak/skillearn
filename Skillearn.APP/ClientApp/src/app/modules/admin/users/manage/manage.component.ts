import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { UserModel } from '../../../../models/users';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserService } from '../../../../services/user.service';
import { RoleModel } from '../../../../models/role';
import { RoleService } from '../../../../services/role.service';
import { MessagesModule } from 'primeng/messages'; 


@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [CardModule, FloatLabelModule, CommonModule, FormsModule, ReactiveFormsModule, InputTextModule, DropdownModule, ButtonModule, ConfirmDialogModule, MessagesModule],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class ManageComponent implements OnInit {
  user: UserModel = new UserModel();

  //dropdowns
  rolesOpts: RoleModel[] = [];


  public fgComponent!: FormGroup;

  constructor(private route: ActivatedRoute, private confirmationService: ConfirmationService, private messageService: MessageService, private router: Router, private userService: UserService, private roleService: RoleService)
  {
    this.fgComponent = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null),
      country: new FormControl(null),
      role: new FormControl(null),
      department: new FormControl(null)
    });
  }


  ngOnInit(): void {
    this.user = history.state.user;
    this.fgComponent.patchValue(this.user);

    if (this.user) {
      console.log('User:', this.user);
    } else {
      console.error('User object not found in route state.');
    }

    this.loadDropdowns();
    console.log('Save', this.fgComponent.get('role')?.value)

  }

  updateForm() {
    let model: UserModel = new UserModel();
    Object.assign(model, this.fgComponent.value)
    this.userService.updateUser(model).subscribe((res) => {
      if (res) {
        this.user = res;
        this.router.navigate(['/admin/users']);
        this.messageService.add({ key: 'notif', severity: 'success', summary: 'User Saved', detail: '' });
      }
    })
  }

  loadDropdowns() {
    this.roleService.getAllRoles().subscribe((res) => {
      if (res) {
        this.rolesOpts = res;
        console.log('Hello', res)
      }
    })
  }

  onCancel(): void {
    // Reset form controls to their initial values
    this.fgComponent.reset(this.user);
  }


  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        this.onCancel();
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
    });
  }

}
