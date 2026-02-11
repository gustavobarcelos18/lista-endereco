import { useState } from "react";

function App() {
  const [formulario, setFormulario] = useState({
    nome: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: ""
  });

  const [erros, setErros] = useState({
    nome: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: ""
  });

  function mudarValor(evento: React.ChangeEvent<HTMLInputElement>) {
    setFormulario({
      ...formulario,
      [evento.target.name]: evento.target.value
    });
  }

  function enviarFormulario(evento: React.FormEvent) {
    evento.preventDefault();

    let novosErros: any = {};
    let valido = true;

    for (let campo in formulario) {
      if (formulario[campo as keyof typeof formulario] === "") {
        novosErros[campo] = "Campo obrigatório";
        valido = false;
      } else {
        novosErros[campo] = "";
      }
    }

    setErros(novosErros);

    if (valido) {
      console.log(formulario);
      alert("Dados salvos");
    }
  }

  return (
    <div className="container">
      <h2>Formulário</h2>

      <form onSubmit={enviarFormulario}>
        <div className="campo">
          <input name="nome" placeholder="Nome" onChange={mudarValor} />
          <div className="erro">{erros.nome}</div>
        </div>

        <div className="campo">
          <input name="cep" placeholder="CEP" onChange={mudarValor} />
          <div className="erro">{erros.cep}</div>
        </div>

        <div className="campo">
          <input name="rua" placeholder="Rua" onChange={mudarValor} />
          <div className="erro">{erros.rua}</div>
        </div>

        <div className="campo">
          <input name="numero" placeholder="Número" onChange={mudarValor} />
          <div className="erro">{erros.numero}</div>
        </div>

        <div className="campo">
          <input name="bairro" placeholder="Bairro" onChange={mudarValor} />
          <div className="erro">{erros.bairro}</div>
        </div>

        <div className="campo">
          <input name="cidade" placeholder="Cidade" onChange={mudarValor} />
          <div className="erro">{erros.cidade}</div>
        </div>

        <div className="campo">
          <input name="estado" placeholder="Estado" onChange={mudarValor} />
          <div className="erro">{erros.estado}</div>
        </div>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default App;
