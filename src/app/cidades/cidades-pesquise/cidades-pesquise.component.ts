import { CidadesService } from './../cidades.service';
import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-cidades-pesquise',
  templateUrl: './cidades-pesquise.component.html',
  styleUrls: ['./cidades-pesquise.component.css']
})
export class CidadesPesquiseComponent implements OnInit {

  cidades = [];

  nomeBusca:string;

  constructor(
    private service:CidadesService,
    private msg:MessageService,
    private conf: ConfirmationService) { }

    pesquisar(){
      this.service.pesquisar({nome:this.nomeBusca})
      .then((dados)=>{
        this.cidades=dados;
      });
    }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(cidade:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+cidade.nome+'?',
      accept: () => {
        this.excluir(cidade);
      }
    });
  }

  excluir(cidade: any){
    this.service.excluir(cidade.id)
    .then(()=>{
      this.pesquisar();
      this.msg.add({severity:'success', summary:'Exclusão', detail:'Cidade '+cidade.nome+' excluída'});
    });
  }


}
