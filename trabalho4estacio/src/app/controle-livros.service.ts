import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Livro 1', resumo: 'Resumo do Livro 1', autores: ['Autor 1', 'Autor 2'] },
    { codigo: 2, codEditora: 2, titulo: 'Livro 2', resumo: 'Resumo do Livro 2', autores: ['Autor 3', 'Autor 4'] },
    { codigo: 3, codEditora: 3, titulo: 'Livro 3', resumo: 'Resumo do Livro 3', autores: ['Autor 5', 'Autor 6'] }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    // Trocar o código pelo código mais alto do vetor, incrementado de um
    livro.codigo = Math.max(...this.livros.map(l => l.codigo), 0) + 1;
    // Adicionar ao vetor
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    // Encontrar o índice do livro com o código fornecido
    const index = this.livros.findIndex(l => l.codigo === codigo);
    // Remover o livro usando splice
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
