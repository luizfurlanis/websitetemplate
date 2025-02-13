
// Constante para usar na troca das imagens pelo usuário
const currentId = { 'imagem-central': 1, 'p2': 0 };
const produtosIrisBotao = ["../assets/Images/Iris Botão/60x60/2 Quadro L 60x60     Ligth Grey    Iris Botão  .jpg",
    "../assets/Images/Iris Botão/60x60/1 Quadro L 60x60 White    Iris Botão .jpg", "../assets/Images/Iris Botão/60x60/4 Quadro L 60x60    Purple   Iris Botão.jpg",
    "../assets/Images/Iris Botão/60x60/3 Quadro L 60x60    Dark Grey    Iris Botão .jpg"];

const produtosPequi = ["../assets/Images/Pequi/60x60/1 Quadro L 60x60  .jpg", "../assets/Images/Pequi/60x60/2 Quadro L 60x60 .jpg",
     "../assets/Images/Pequi/60x60/3 Quadro L 60x60 .jpg", "../assets/Images/Pequi/60x60/4 Quadro L 60x60  .jpg"]

const produtosJoa = ["../assets/Images/Joá/60x60/1 Quadro L   60x60.jpg", "../assets/Images/Joá/60x60/Quadro L 60x60  .jpg", 
    "../assets/Images/Joá/60x60/Quadro L 60x60.jpg", "../assets/Images/Joá/60x60/Quadro L 60x60 .jpg"]

const produtosIrisPraia = ["../assets/Images/Iris da Praia/60x60/1 Quadro L 60x60         White    Iris   .jpg", "../assets/Images/Iris da Praia/60x60/2 Quadro L 60x60        Ligth Grey    Iris   .jpg",
    "../assets/Images/Iris da Praia/60x60/3 Quadro L 60x60         Dark Grey    Iris   .jpg", "../assets/Images/Iris da Praia/60x60/4 Quadro L 60x60         Purple    Iris  .jpg"]

const produtosRojo = ["../assets/Images/Platyceriun Rojo/60x60/1 Quadro L  60x60  Purple Platyceriun Rojo (2).jpg", "../assets/Images/Platyceriun Rojo/60x60/2 Quadro L  60x60  Purple Platyceriun Rojo.jpg",
    "../assets/Images/Platyceriun Rojo/60x60/3 Quadro L  60x60  Purple Platyceriun Rojo.jpg", "../assets/Images/Platyceriun Rojo/60x60/4 Quadro L  60x60  Purple Platyceriun Rojo (3).jpg"]

const produtosVioleta = ["../assets/Images/Platycerium Violeta/60x60/1 QuadroL 60x60  White Platyceriun Violeta (2).jpg", "../assets/Images/Platycerium Violeta/60x60/2 QuadroL 60x60  White Platyceriun Violeta.jpg",
    "../assets/Images/Platycerium Violeta/60x60/3 QuadroL 60x60  White Platyceriun Violeta.jpg", "../assets/Images/Platycerium Violeta/60x60/4 QuadroL 60x60  White Platyceriun Violeta (2).jpg"]

const produtosCoccolobaSeca = ["../assets/Images/Coccoloba Seca Persea/60x60/1 Quadro L 60x60.jpg", "../assets/Images/Coccoloba Seca Persea/60x60/2 Quadro L 60x60.jpg", 
    "../assets/Images/Coccoloba Seca Persea/60x60/3 Quadro L 60x60.jpg", "../assets/Images/Coccoloba Seca Persea/60x60/4 Quadro L     60x60 .jpg"]

const produtosCoccolobaPersea = ["../assets/Images/Coccoloba Persea/60x60/1 Quadro L 60x60         White    Coccoloba Persea   .jpg",
    "../assets/Images/Coccoloba Persea/60x60/2 Quadro L 60x60        Ligth Gray    Coccoloba Persea 2.jpg", "../assets/Images/Coccoloba Persea/60x60/3 Quadro L 60x60        Dark Gray    Coccoloba Persea   .jpg",
    "../assets/Images/Coccoloba Persea/60x60/4 Quadro L 60x60       Purple    Coccoloba Persea .jpg"]


// Cosntantes de seleções usadas nas funções que selecionam os tamanhos e cores
const colorButton = document.querySelectorAll('.product_color_button');
const sizeButton = document.querySelectorAll('.product_selector_button');
let choseColor = null;
let choseSize = null;

// Função para trocar a imagem nas setas
function trocarImagem(direction, id, imagem) {
    currentId[id] += direction;

    if (currentId[id] < 0) {
        currentId[id] = imagem.length - 1;
    } else if (currentId[id] >= imagem.length) {
        currentId[id] = 0;
    }

    document.getElementById(id).src = imagem[currentId[id]];
}

// Função para trocar as imagens com os botões das cores
function trocarImagemCor(number, id, imagem) {
    document.getElementById(id).src = imagem[number]
}

// Função para remover os selecionados usada nas funções colorButton e sizeButton
function removechoses(buttons) {
    buttons.forEach(button => button.classList.remove('chose'));
}

// Função para a seleção dos botões das cores
colorButton.forEach(button => {
    button.addEventListener('click', () => {
        removechoses(colorButton);

        button.classList.add('chose')

        choseColor = button.querySelector('img').alt;
        console.log('Cor selecionada:', choseColor)
    });
});

// Função para a seleção dos botões dos tamanhos
sizeButton.forEach(button => {
    button.addEventListener('click', () => {
        removechoses(sizeButton);

        button.classList.add('chose');

        choseSize = button.querySelector('.size-span').textContent;
        console.log('Tamanho escolhido:', choseSize)
    });
});








//teste 

function sidebarDetails() {
    document.getElementById("sidebar").classList.add("open")
}

function sidebarClose() {
    document.getElementById("sidebar").classList.remove("open")
}