/*
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Augusto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {   
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            }
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
            {
                title: "Comer cu de curioso",
                author: "Cristhian Souza & Augusto Cury",
            }
        ],
    },
];

function contar(array)
{ 
    return array.length;
}

function adicionarAutores(autores, livros)
{
    for(let i in livros){
        autores.push(livros[i].author);
    }
}

function calcularTotal()
{
    let autores = [];
    let totalCategorias = contar(booksByCategory);
    console.log("Total de categorias:", totalCategorias);
    for(let i in booksByCategory)
    {
        let item = booksByCategory[i];
        adicionarAutores(autores, item.books);

        let totalLivros = contar(item.books);
        console.log("Categoria:", item.category);
        console.log("Total de livros:", totalLivros);
    }
    autores = [...new Set(autores)];
    console.log("Total de autores:", autores.length);  
}

function buscarPorAutor(nomeAutor)
{
    let livrosDoAutor = [];
    for(let categoria of booksByCategory)
    {
        for(let livro of categoria.books)
        {
            if(livro.author.includes(nomeAutor))
            {
                livrosDoAutor.push(livro);
            }

        }
    }

    return livrosDoAutor;
}


