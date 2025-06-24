import { Component } from '@angular/core';
@Component({
selector: 'app-exibe-mensagem',
templateUrl: './exibe-mensagem.html',
standalone: false,
styleUrls: ['./exibe-mensagem.css']
})

export class ExibeMensagem {
  mensagem: string;
  constructor() {
    this.mensagem = '';
  }
  alterarMensagem(n: string) {
    this.mensagem = `Seja bem-vindo, ${n}!`;
  }
}

