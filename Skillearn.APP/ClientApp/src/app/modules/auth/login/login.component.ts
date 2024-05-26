import { Component, OnInit, effect, inject } from '@angular/core';
import { buttonActionSignal } from '../../../services/signals.service';
import { Observable } from 'rxjs';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {
  }  


}
