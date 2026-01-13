
// variaveis, array e objetos

const products = [ // array contendo todos os produtos
    {
        id: 1, // id único do produto
        title: "Smartphone Samsung Galaxy A54", // nome do produto
        price: 1899.99, // preço normal
        discount: 15, // porcentagem de desconto
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop" // imagem
    },
    {
        id: 2,
        title: "Notebook Lenovo IdeaPad",
        price: 2999.90,
        discount: 20,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop"
    },
    {
        id: 3,
        title: "Smart TV LG 50 4K",
        price: 2299.00,
        discount: 10,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop"
    },
    {
        id: 4,
        title: "Tênis Nike Air Max",
        price: 399.99,
        discount: 25,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
    },
    {
        id: 5,
        title: "Fone JBL Bluetooth",
        price: 199.90,
        discount: 30,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
    },
    {
        id: 6,
        title: "Cadeira Gamer ThunderX3",
        price: 899.00,
        discount: 18,
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=400&fit=crop"
    },
    {
        id: 7,
        title: "Console PlayStation 5",
        price: 3999.99,
        discount: 5,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop"
    },
    {
        id: 8,
        title: "Apple Watch Series 8",
        price: 2899.00,
        discount: 12,
        image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop"
    },
    {
        id: 9,
        title: "Tablet Samsung Galaxy Tab",
        price: 2199.90,
        discount: 15,
        image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop"
    },
    {
        id: 10,
        title: "Câmera Canon EOS Rebel",
        price: 2699.00,
        discount: 8,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop"
    },
    {
        id: 11,
        title: "Mouse Gamer Logitech",
        price: 249.90,
        discount: 20,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop"
    },
    {
        id: 12,
        title: "Teclado Mecânico RGB",
        price: 449.90,
        discount: 22,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop"
    }
];



function formatarPreco(preco) { // função que formata o preço em moeda brasileira

    return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) // retorna ex: "R$ 1.899,99"
}


function criarProdutoDoCard(product) { // recebe 1 produto e cria o HTML do card

    return `
    <div class="product-card"> <!-- card do produto -->
    
    <img src="${product.image}" alt="${product.title}" class="product-image"> <!-- imagem -->

    <h3 class="product-title">${product.title}</h3> <!-- título -->

    <div class="product-price">${formatarPreco(product.price)}</div> <!-- preço formatado -->

    <div class="product-discount">${product.discount} % off </div> <!-- desconto -->

    </div>
    
    `
}



function mostrarProdutos(products) { // mostra vários produtos na tela

    const grid = document.getElementById("productsGrid"); // pega a div onde os cards serão inseridos

    grid.innerHTML = products.map(criarProdutoDoCard).join("") // cria os cards e coloca todos dentro da div
}



function buscarProdutoPorTitulo() { // função para filtrar produtos

    const termoBusca = document.getElementById("buscarInput").value.toLowerCase(); // pega o texto digitado no input

    const filtrados = products.filter(p => // filtra os produtos
        p.title.toLowerCase().includes(termoBusca) // verifica se o nome contém o que foi digitado
    );

    mostrarProdutos(filtrados); // mostra somente os filtrados
}



document.addEventListener("DOMContentLoaded", () => { // executa quando a página carregar
    mostrarProdutos(products); // mostra todos os produtos inicialmente

    document.getElementById("buscarBtn").addEventListener("click", buscarProdutoPorTitulo) // ativa o botão de busca
});
