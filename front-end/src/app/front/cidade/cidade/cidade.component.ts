import { Cidade } from './../../../../../../back-end/models/Cidade';
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from "@angular/router";
import { CidadeService } from "../cidade.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.scss']
})

export class CidadeComponent implements OnInit {

  cidade : any = {}

  cidades = [
  {codigo_cidade:"CIDSP002",nome_cidade:"Barretos",uf:"SP"},
	{codigo_cidade:"CIDSP015",nome_cidade:"Franca",uf:"SP"},
	{codigo_cidade:"CIDSP070",nome_cidade:"Rifaina",uf:"SP"},
	{codigo_cidade:"CIDMG351",nome_cidade:"Itau",uf:"MG"}
  ];

  displayedColumns : string[] = ['codigo_cidade','nome_cidade','uf','editar','excluir']

  dataSource = new MatTableDataSource<Cidade>(this.cidades);

  constructor(
    private cidadeSrv : CidadeService,
    private actRoute : ActivatedRoute,
  ) { }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  async ngOnInit() {
    //this.cidades = await this.cidadeSrv.listar()
    //console.table(this.cidades)
  }

  async salvar(form : NgForm) {
    try {
      if(form.valid) {
        if(this.cidade._id) {
          await this.cidadeSrv.atualizar(this.cidade)
        }
        else {
          await this.cidadeSrv.novo(this.cidade)
        }
      }
    }
    catch(erro) {
      console.log(erro)
    }
  }
  
}