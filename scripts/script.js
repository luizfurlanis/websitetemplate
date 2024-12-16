// Variável para armazenar os produtos recebidos da API
let productsData = [];

// Função para filtrar os produtos com base no valor da pesquisa
function filterProducts(products, searchQuery) {
    return products.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
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
            <a href='${item.id}.html'>
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>$${item.price}</p>
            </a>
        `;
        ul.appendChild(li); // Adiciona o item na lista
    });
}

// Fetch dos produtos da API
fetch('https://fakestoreapi.com/products?limit=12')
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
