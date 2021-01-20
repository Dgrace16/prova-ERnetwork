import { Cliente } from './../../../../../../back-end/models/Cliente';
import { Cidade } from './../../../../../../back-end/models/Cidade';
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  cidades  = [
    {nome_cidade:"Franca",codigo:"12-SP",uf:"SP"},
    {nome_cidade:"Ribeirão Preto",codigo:"35-SP",uf:"SP"},
    {nome_cidade:"Ribeirão Corrente",codigo:"14-SP",uf:"SP"}
  ];

  clientes = [
      {codigo_cliente:"CL01",nome_cliente:"Luiz Henrique Neto",sexo:"Masculino",rg:"50.851.552-X",cpf:"444.555.666-18",dt_nascimento:"21/12/1992",salario:3000.00,cidade:this.cidades[0].nome_cidade},
      {codigo_cliente:"CL02",nome_cliente:"Brenda Neri Sousa",sexo:"Feminino",rg:"44.589.147-9",cpf:"465.145.365-14",dt_nascimento:"29/03/2001",salario:1500.00,cidade:this.cidades[2].nome_cidade},
      {codigo_cliente:"CL03",nome_cliente:"Luiza Ferreira da Silva",sexo:"Feminino",rg:"36.741.658-8",cpf:"462.424.258-13",dt_nascimento:"31/08/1997",salario:6000.00,cidade:this.cidades[1].nome_cidade},
      {codigo_cliente:"CL04",nome_cliente:"Aparecida Oliveira",sexo:"Feminino",rg:"69.147.589-4",cpf:"445.154.154-18",dt_nascimento:"29/06/2000",salario:500.00,cidade:this.cidades[3].nome_cidade},
      {codigo_cliente:"CL05",nome_cliente:"Maria Almeida",sexo:"Feminino",rg:"41.985.258-9",cpf:"452.965.984-21",dt_nascimento:"15/11/1998",salario:4000.00,cidade:this.cidades[0].nome_cidade},
      {codigo_cliente:"CL06",nome_cliente:"Marco Toledo ",sexo:"Masculino",rg:"25.665.145-3",cpf:"640.654.785-17",dt_nascimento:"19/12/1982",salario:3600.00,cidade:this.cidades[3].nome_cidade},
      {codigo_cliente:"CL07",nome_cliente:"Geane Nascimento",sexo:"Feminino",rg:"36.654.657-3",cpf:"502.785.465-12",dt_nascimento:"24/08/1993",salario:4900.00,cidade:this.cidades[1].nome_cidade},
      {codigo_cliente:"CL08",nome_cliente:"Antonio Caetano",sexo:"Masculino",rg:"65.364.147-5",cpf:"603.357.154-31",dt_nascimento:"14/03/1985",salario:3650.00,cidade:this.cidades[3].nome_cidade},
      {codigo_cliente:"CL09",nome_cliente:"Alessandro Nogueira",sexo:"Masculino",rg:"85.785.478-4",cpf:"301.148.357-54",dt_nascimento:"04/08/1968",salario:1480.00,cidade:this.cidades[0].nome_cidade},
      {codigo_cliente:"CL10",nome_cliente:"Paola Oliveira Martins",sexo:"Feminino",rg:"47.548.321-5",cpf:"306.365.147-31",dt_nascimento:"02/05/1992",salario:3690.00,cidade:this.cidades[2].nome_cidade},
      {codigo_cliente:"CL11",nome_cliente:"Giovanni Liboni",sexo:"Masculino",rg:"42.654.214-X",cpf:"600.985.586-53",dt_nascimento:"09/01/1995",salario:1580.00,cidade:this.cidades[2].nome_cidade},
      {codigo_cliente:"CL12",nome_cliente:"Ana Carolina Silvestre ",sexo:"Feminino",rg:"78.321.152-4",cpf:"599.286.145-73",dt_nascimento:"10/07/1994",salario:3150.00,cidade:this.cidades[1].nome_cidade},
      {codigo_cliente:"CL13",nome_cliente:"Elisa Santos",sexo:"Feminino",rg:"55.486.478-5",cpf:"544.197.147-78",dt_nascimento:"30/09/1985",salario:10000.00,cidade:this.cidades[1].nome_cidade},
      {codigo_cliente:"CL14",nome_cliente:"Camila de Souza",sexo:"Feminino",rg:"45.965.854-6",cpf:"356.371.369-17",dt_nascimento:"08/10/2002",salario:9000.00,cidade:this.cidades[0].nome_cidade},
      {codigo_cliente:"CL15",nome_cliente:"Roberto Rocha",sexo:"Masculino",rg:"46.546.465-8",cpf:"456.793.456-25",dt_nascimento:"21/04/2000",salario:4520.00,cidade:this.cidades[3].nome_cidade},
      {codigo_cliente:"CL16",nome_cliente:"Fabio Assunção",sexo:"Masculino",rg:"36.258.155-2",cpf:"365.831.357-12",dt_nascimento:"06/02/1993",salario:5120.00,cidade:this.cidades[0].nome_cidade},
      {codigo_cliente:"CL17",nome_cliente:"Daniele Cardoso",sexo:"Feminino",rg:"78.852.632-7",cpf:"445.279.159-31",dt_nascimento:"17/04/1994",salario:5000.00,cidade:this.cidades[2].nome_cidade},
      {codigo_cliente:"CL18",nome_cliente:"Alberto Menezes",sexo:"Masculino",rg:"75.369.458-6",cpf:"586.671.147-24",dt_nascimento:"12/03/1997",salario:3840.00,cidade:this.cidades[1].nome_cidade},
      {codigo_cliente:"CL19",nome_cliente:"Marcelo Madureira",sexo:"Masculino",rg:"24.357.652-5",cpf:"441.482.787-57",dt_nascimento:"24/12/1995",salario:7560.00,cidade:this.cidades[3].nome_cidade},
      {codigo_cliente:"CL20",nome_cliente:"Joana Gabriela Freitas",sexo:"Feminino",rg:"67.468.145-1",cpf:"336.147.369-87",dt_nascimento:"16/11/2000",salario:2100.00,cidade:this.cidades[0].nome_cidade}
  ];

  displayedColumns : string[] = ['nome','codigo','sexo','rg','cpf','dt_nascimento','salario','cidade','editar','excluir']

  dataSource = new MatTableDataSource<Cliente>(this.clientes);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  cliente: any = {}

  constructor(
    private clienteSrv : ClienteService,
    private actRoute : ActivatedRoute
  ) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(){
  }

  async salvar(form : NgForm) {
    try {
      if(form.valid) {
        if(this.cliente._id) {
          await this.clienteSrv.atualizar(this.cliente)
        }
        else {
          await this.clienteSrv.novo(this.cliente)
        }
      }
    }
    catch(erro) {
      console.log(erro)
    }
  }

}
