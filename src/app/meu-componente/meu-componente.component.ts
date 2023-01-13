import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
  //styles: [`h1 {color: blue }`]
})
export class MeuComponenteComponent implements OnInit {

  @Input() nome : string | undefined;
  @Output() nomeChange = new EventEmitter();
  
  constructor() {
    this.nome = 'TreinaWeb';
  }

  ngOnInit(): void {
    console.log('abc');
  }

  onChangeName() {
    this.nomeChange.emit(this.nome);
  }
}
