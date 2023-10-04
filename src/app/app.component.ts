import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'oneplantao';
  logged: boolean = false;

  constructor(private router: Router){}


isAuthenticated(evento: boolean){
  this.logged = evento;
  this.router.navigate(['/escalas']);
}

}