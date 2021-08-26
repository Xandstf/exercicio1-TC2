import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css']
})
export class ListarAlunoComponent implements OnInit {

  alunoInfo : Aluno = {
    nome: "Alexandre Júnior",
    dataIngresso: "27/01/2019",
    previsaoFormatura: "10/10/2021"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
