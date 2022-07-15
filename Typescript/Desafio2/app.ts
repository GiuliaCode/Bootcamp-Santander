/* Exercício 
// Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/

/* Solução */

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
  }
  
  enum Profissao {
    Atriz,
    Padeiro,
  }
  
  
  const maria: Pessoa = {
    nome: 'maria',
    idade: 29,
  }
  
  const roberto: Pessoa = {
    nome: 'roberto',
    idade: 19,
    profissao: Profissao.Padeiro
  }
  
  const laura: Pessoa = {
    nome: 'laura',
    idade: 32,
    profissao: Profissao.Atriz
  }
  
  const carlos: Pessoa = {
    nome: 'carlos',
    idade: 19,
    profissao: Profissao.Padeiro
  }
  
