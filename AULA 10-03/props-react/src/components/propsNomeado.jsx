export default function PropsNomeado({titulo,texto,nome,altura,idade,estiloMusical,disciplina,foto}) {
    return(
        <>
            <h1>{titulo}</h1>
            <p>{texto}<span> {nome} </span></p>
            <p>Altura: {altura}</p>
            <p>Idade: {idade}</p>
            <p>{estiloMusical}</p>
            <p>{disciplina}</p>
            <img src={foto} alt={nome}/>
        </>
    )
}