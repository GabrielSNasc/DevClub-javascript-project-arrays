const list = document.querySelector("ul")
const showAllBtn = document.querySelectorAll(".container-buttons button")[0]
const mapBtn = document.querySelectorAll(".container-buttons button")[1]
const reduceBtn = document.querySelectorAll(".container-buttons button")[2]
const filterBtn = document.querySelectorAll(".container-buttons button")[3]

// ForEach

function showAll(productsArray) {
    list.innerHTML = "" //  limpa a lista antes de mostrar}

    // percorre cada produto usando forEach
    productsArray.forEach(product => {
        // cria uma <li> para cada produto
        const li = document.createElement("li")

        li.innerHTML = `
            <img src="${product.src}">
            <p>${product.name}</p>
            <p class="item-price">
                ${product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
        `

        // adiciona o <li> dentro da <ul>
        list.appendChild(li)
    })
}

showAllBtn.addEventListener("click", () => {
    showAll(products) 
})

// Map

function mapProducts(productsArray) {
    // gera um novo array com desconto de 10%
    const newProducts = productsArray.map(product => {
        return {
            ...product, // copia todas as propriedades (name, src)
            price: product.price * 0.9 // aplica 10% de desconto
        }
    })

    // depois mostra os produtos com desconto na tela
    showAll(newProducts)
}

mapBtn.addEventListener("click", () => {
    mapProducts(products)
})

// Reduce

function sumProducts(productsArray) {
    const total = productsArray.reduce((acc, product) => {
        return acc + product.price
    }, 0) // começa do 0

    // Mostra o resultado na tela
    list.innerHTML = `
        <li>
            <p>O valor total do cardápio é:</p>
            <p class="item-price">
                ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
        </li>
    `
}

reduceBtn.addEventListener("click", () => {
    sumProducts(products)
})

// Filter

function filterProducts(productsArray) {
    const veganProducts = productsArray.filter(product => 
        product.name.toLowerCase().includes("vegan")
    )

    showAll(veganProducts)
}

filterBtn.addEventListener("click", () => {
    filterProducts(products)
})