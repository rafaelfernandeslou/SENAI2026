export default function ListaFrutas({ titulo }) {
    const frutas = [
        { id: 1, nome: "Maçã" },
        { id: 2, nome: "Banana" },
        { id: 3, nome: "Pêra" }
    ];

    const listaFrutas = frutas.map((fruta) => {
        return (
            <li key={fruta.id}>
                <h3>{fruta.nome}</h3>
            </li>
        );
    });

    return (
        <>
            <h1>{titulo}</h1>
            <ul>{listaFrutas}</ul>
        </>
    );
}