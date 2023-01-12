import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  //styleUrls: ['./meu-componente.component.css']
  styles: [`h1 {color: blue }`]
})
export class MeuComponenteComponent implements OnInit {

  nome : string | undefined;
  
  @Input() nomeExterno: string | undefined;

  constructor() {
    this.nome = 'TreinaWeb';
  }

  ngOnInit(): void {
    console.log('abc');
  }

}