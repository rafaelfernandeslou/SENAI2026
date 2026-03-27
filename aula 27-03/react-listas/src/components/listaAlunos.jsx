export default function ListaAlunos() {

    const alunos = [
        { id: 0, nome: "Cesar", nota: 7, fotoperfil: "https://randomuser.me/api/portraits/women/1.jpg" },
        { id: 1, nome: "Eugênio", nota: 4, fotoperfil: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 2, nome: "Beto", nota: 9, fotoperfil: "https://randomuser.me/api/portraits/women/2.jpg" },
        { id: 3, nome: "Antonio", nota: 5, fotoperfil: "https://randomuser.me/api/portraits/men/2.jpg" },
        { id: 4, nome: "Marcos Hidalgo", nota: 8, fotoperfil: "https://randomuser.me/api/portraits/women/3.jpg" },
        { id: 5, nome: "Beto Careca", nota: 0, fotoperfil: "https://randomuser.me/api/portraits/women/3.jpg" }
    ];

    const aprovados = alunos.filter(aluno => aluno.nota >= 6);

    const listaAprovados = aprovados.map((aluno) => {
        return (
            <li key={aluno.id} style={{ marginBottom: '10px', listStyle: 'none' }}>
                <img
                    src={aluno.fotoperfil}
                    alt={aluno.nome}
                    style={{ width: '70px' }}
                />
                <h3>Nome: {aluno.nome}</h3>
                <p>Nota: {aluno.nota}</p>
                <hr />
            </li>
        );
    });


    return (
        <>
            <h1>Lista de Alunos Aprovados</h1>
            <ul>
                {listaAprovados}
            </ul>
        </>
    );
}