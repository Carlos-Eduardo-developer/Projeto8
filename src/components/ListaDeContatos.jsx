import { useState } from "react"

function ListaDeContatos() {
    const [contatos, setContatos] = useState([]);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');

    const adicionarContato = () => {
        if (nome && telefone) {
            setContatos([...contatos, { nome, telefone }]);
            setNome('');
            setTelefone('');
        }
    };

    return (
        <div>
            <h2>Lista de Contatos:</h2>
            <div>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome"
                />
                <input
                    type="text"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="Telefone"
                />
                <button onClick={adicionarContato}>Adicionar Contato</button>
            </div>
            <ol>
                {contatos.map((contato, index) => (
                    <li key={index}>
                        <strong>{contato.nome}:</strong> {contato.telefone}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ListaDeContatos;
