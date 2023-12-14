import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-toolbar-navigation',
  templateUrl: './toolbar-navigation.component.html',
  styleUrls: ['./toolbar-navigation.component.scss']
})

export class ToolbarNavigationComponent {
  constructor(private cookie: CookieService, private router: Router) {}

  handleLogout(): void {
    this.cookie.delete('T_USER');
    void this.router.navigate(['/login']);
  }

  handleControle(): void{
    this.router.navigate(['/cadastro']);
  }

  handleHome(): void{
    this.router.navigate(['/home']);
  }

}
