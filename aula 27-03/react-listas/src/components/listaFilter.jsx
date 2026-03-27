const estudantes = [
    {nome: 'Rafael', idade:17, ra:6969, disciplina: 'Matemática'},
    {nome: 'samuel', idade:16, ra:6767, disciplina: 'Biologia'},
    {nome: 'Zacarias', idade:17, ra:8888, disciplina: 'Química'}
]

export default function ListaFilter({titulo}){
    const lista = estudantes.filter(estudante => estudante.disciplina == 'Matemática')

    const listaEstudantes = lista.map((estudante) => {
        return <li key={estudante.id}>
            <h3>{estudante.nome}</h3>
            <p>{estudante.idade}</p>
            <p>{estudante.ra}</p>
        </li>
    })

    return(
        <>
        <h1>{titulo}</h1>
        <ul>
            {listaEstudantes}
        </ul>
        </>
    )
}