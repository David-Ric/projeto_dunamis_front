import { GetAllCadastroResponse } from './../../models/interfaces/cadastro/response/GetAllCadadstroResponse';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private API_URL = environment.API_URL
  private JWT_TOKEN = this.cookie.get('T_USER');
  private QUANTPG = 10;
  private PAGINA = 1;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.JWT_TOKEN}`

    })
  }

  constructor( private http: HttpClient,private cookie: CookieService) {}

    GetAllCadastro(): Observable<Array<GetAllCadastroResponse>>{
      return this.http.get<Array<GetAllCadastroResponse>>(
        `${this.API_URL}/api/Alocacao?pagina=${this.PAGINA}&totalpagina=${this.QUANTPG}`,
        this.httpOptions
      )
    }
}
