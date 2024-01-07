import { Component } from '@angular/core';
import { AuthService } from '../guards/auth.service'; // Asegúrate de que la ruta de importación sea correcta
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/clientes']); // Redirige a '/clientes' después del login
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

}
