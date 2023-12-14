import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { GetAllCadastroResponse } from 'src/app/models/interfaces/cadastro/response/GetAllCadadstroResponse';
import { CadastroService } from 'src/app/services/cadastro/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnDestroy,OnInit{

  private readonly destroy$: Subject<void> = new Subject();

  cadastroData: GetAllCadastroResponse[] = [];
  errorMessage: string = '';

  constructor(
    private router: Router,
    private cadastroService: CadastroService
  ){}
  ngOnInit(): void {
    this.getAllCadastro();
  }

  getAllCadastro() {
    this.cadastroService.GetAllCadastro().subscribe(
      (data) => {
        this.cadastroData = data;
        console.log('cadastros', this.cadastroData);
      },
      (error) => {
        console.error('Erro na solicitação HTTP:', error);
        this.errorMessage = 'Ocorreu um erro ao buscar os dados.';
      }
    );
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
