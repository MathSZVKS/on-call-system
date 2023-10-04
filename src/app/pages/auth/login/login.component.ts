import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login-service/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() userAuthenticated = new EventEmitter<boolean>();
  username:string = ''
  password:string = ''
  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService
  ) {}

	loginSubmit() {
    let loginBody = {
      username: this.username,
      password: this.password
    }
    this.loginService.login(loginBody).subscribe({
      next:(res:any) => {
        localStorage.setItem("username",res.username)
        localStorage.setItem("userId",res.userId)
        localStorage.setItem("token",res.token)
        localStorage.setItem("role",res.role)
        this.router.navigate(['/']);
        this.userAuthenticated.emit(true);
      },
      error: (error:any) => {
        this.toastr.error(error);
      }
    })


  }

}
