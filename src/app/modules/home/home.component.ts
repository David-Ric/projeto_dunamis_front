import { UserService } from './../../services/user/user.service';
import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthRequest } from 'src/app/models/interfaces/user/auth/AuthRequest';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  loginForm = this.formBuilder.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cookieService: CookieService,
    private messageService: MessageService,
    private router: Router
    ){}

    onSubmitLoginForm(): void {
      if (this.loginForm.value && this.loginForm.valid) {
        this.userService.authUser(this.loginForm.value as AuthRequest).subscribe({
          next: (response) => {
            if (response) {
              this.cookieService.set('T_USER', response?.token);
              this.loginForm.reset();
              this.router.navigate(['/home']);

              this.messageService.add({
                severity: 'success',
                summary: 'Sucesso',
                detail: `Bem vindo de volta ${response?.username}!`,
                life: 4000,
              });

            }
          },
          error: (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Erro',
              detail: `Erro ao fazer o login!`,
              life: 4000,
            });
            console.log(err);
            this.loginForm.reset();
          },
        });
      }
    }


  onUsernameInput(event: any): void {
    const newValue = event.target.value.toLowerCase();
    this.loginForm.get('username')?.setValue(newValue);
  }
}
