import { MessageService } from 'primeng/api';
import { CidadesService } from './cidades.service';
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadesCadastroComponent } from './cidades-cadastro/cidades-cadastro.component';
import { CidadesPesquiseComponent } from './cidades-pesquise/cidades-pesquise.component';
//import {ListboxModule} from 'primeng/listbox';

@NgModule({
  declarations: [CidadesCadastroComponent, CidadesPesquiseComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule
    //ListboxModule
  ],
  exports: [
    CidadesCadastroComponent,
    CidadesPesquiseComponent
  ],
  providers: [
    CidadesService,
    MessageService
  ]
})
export class CidadesModule { }
