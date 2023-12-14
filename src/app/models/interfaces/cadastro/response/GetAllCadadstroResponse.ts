export interface GetAllCadastroResponse{
  id: number,
  veiculoId: number,
  veiculo: {
        placa: string,
    modelo: string,
    motoristaId: number,
    motorista: {
      cpf: string,
      nome: string,
      fone: string,
      email: string
    }
  },
  distribuidoraId: number,
  distribuidora: {
    cnpj: string,
    razao_Social: string,
    fone: string,
    email: string,
    logradouro: string,
    municipio: string,
    uf: string
  },
  carga: string,
  peso: number,
  obs: string,
  entrada: string,
  checado: boolean,
  saída: string,
}
