import React, { Component } from "react";

export class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Escreva aqui ...." />
        <textarea placeholder="Digite Algo..." />
        <button>Criar Nota</button>
      </form>
    );
  }
}
