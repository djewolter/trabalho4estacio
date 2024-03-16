import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css',
  imports: [ReactiveFormsModule, FormsModule],
})

export class LivroDadosComponent implements OnInit{
   editoras = [
    { codEditora: 1, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' },
    { codEditora: 3, nome: 'Editora C' },
    // ... outras editoras
  ];
  livro = new FormGroup({
    titulo: new FormControl('', Validators.required),
    resumo:  new FormControl(''),
    codEditora:  new FormControl(''),
    autoresForm:  new FormControl(''),

  });


  armazenarNome:string | null | undefined
  ngOnInit():void {
    console.log("this.numero");
  }

  updateName() {
    console.log(this.livro.controls['titulo'].value);
    if (this.livro.controls['titulo'].invalid) {
       return alert("Título é obrigatório");

    }return alert("Livro cadastrado com sucesso");
}
}
