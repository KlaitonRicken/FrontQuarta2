import { MessageService } from 'primeng/api';
import { ProdutosService } from './produtos.service';
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import {PickListModule} from 'primeng/picklist';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  declarations: [ProdutosCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule,
    PickListModule,
    CurrencyMaskModule
  ],
  exports: [
    ProdutosCadastroComponent
  ],
  providers: [
    ProdutosService,
    MessageService
  ]
})
export class ProdutosModule { }
