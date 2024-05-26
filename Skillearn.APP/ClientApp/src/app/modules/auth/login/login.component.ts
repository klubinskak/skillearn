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
  // private buttonActionSignal$: Observable<string> = toObservable(buttonActionSignal);
  

  ngOnInit(): void {
    // this.buttonActionSignal$.subscribe((res: string) => {
    //   console.log('res', res);
    // })
effect(() => {
  console.log();
});
  }

}
