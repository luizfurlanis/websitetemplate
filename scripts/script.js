fetch('https://fakestoreapi.com/products?limit=5')
    .then(res => res.json())
    .then((json) => {
        console.log("Produtos recebidos da API:", json);
        const ul = document.getElementById('listaProdutos'); // Seleciona a lista
        // Adiciona cada produto como um item na lista
        json.forEach((item) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>$${item.price}</p>
            `;
            ul.appendChild(li); // Adiciona o item na lista
        });
    })
    .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
    });