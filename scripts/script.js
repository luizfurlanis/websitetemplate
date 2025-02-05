// Variável para armazenar os produtos recebidos da API
let productsData = [];

// Função para filtrar os produtos com base no valor da pesquisa
function filterProducts(products, searchQuery) {
    return products.filter(item => 
        item.titulo.toLowerCase().includes(searchQuery.toLowerCase())
    );
}

// Função para exibir os produtos na lista
function displayProducts(products) {
    const ul = document.getElementById('listaProdutos'); // Seleciona a lista
    ul.innerHTML = ''; // Limpa a lista antes de adicionar os produtos

    // Adiciona cada produto como um item na lista
    products.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <a href='${item.titulo}.html'>
                <img src="${item.imagem}" alt="${item.titulo}">
                <h3>${item.titulo}</h3>
                <p>$${item.preco}</p>
            </a>
        `;
        ul.appendChild(li); // Adiciona o item na lista
    });
}

// Fetch dos produtos da API
fetch('http://127.0.0.1:5000/quadros')
    .then(res => res.json())
    .then((json) => {
        console.log("Produtos recebidos da API:", json);
        productsData = json; // Armazena os produtos recebidos

        // Exibe todos os produtos inicialmente
        displayProducts(productsData);

        // Adiciona o evento de pesquisa para filtrar os produtos
        const searchInput = document.querySelector('.busca');
        searchInput.addEventListener('input', (event) => {
            const searchQuery = event.target.value;
            const filteredProducts = filterProducts(productsData, searchQuery);
            displayProducts(filteredProducts); // Exibe os produtos filtrados
        });
    })
    .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
    });



    //Codigo que troca a visualização do produto
const currentId = {'p1': 0, 'p2' : 0 };
const produtos1 = ["../assets/Images/Iris Botão/60x60/2 Quadro L 60x60     Ligth Grey    Iris Botão  .jpg",
    "../assets/Images/Iris Botão/60x60/1 Quadro L 60x60 White    Iris Botão .jpg", "../assets/Images/Iris Botão/60x60/4 Quadro L 60x60    Purple   Iris Botão.jpg"];

function trocarImagem(direction, id, imagem){
    currentId[id] +=  direction;

    if(currentId[id] < 0) {
        currentId[id] = imagem.length - 1;
    } else if (currentId[id] >= imagem.length) {
        currentId[id] = 0;
    }

    document.getElementById(id).src = imagem[currentId[id]];
}


// Codigo que seleciona os botoes de tamanho e cor do produto
const colorButton = document.querySelectorAll('.product_color_button');
const sizeButton = document.querySelectorAll('.product_selector_button');

let choseColor = null;
let choseSize = null;

function removechoses(buttons) {
    buttons.forEach(button => button.classList.remove('chose'));
}

colorButton.forEach(button => {
    button.addEventListener('click', () => {
        removechoses(colorButton);

        button.classList.add('chose')

        choseColor = button.querySelector('img').alt;
        console.log('Cor selecionada:', choseColor)
    });
});

sizeButton.forEach(button => {
    button.addEventListener('click', () => {
        removechoses(sizeButton);

        button.classList.add('chose');

        choseSize = button.querySelector('.size-span').textContent;
        console.log('Tamanho escolhido:', choseSize)
    });
});