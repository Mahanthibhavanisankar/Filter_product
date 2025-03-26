
const products = [
    [
        {
            "id": 1,
            "name": "Shirts",
            "price": 49.99,
            "rating": 4.5,
            "category": "Apparel",
            "subcategory": "Shirts",
            "image": "https://tse3.mm.bing.net/th?id=OIP.ORH_mwC_R1rP2xGViNy_lwHaE8&pid=Api&P=0&h=180"
        },
        {
            "id": 2,
            "name": "Jeans",
            "price": 49.99,
            "rating": 4.7,
            "category": "Apparel",
            "subcategory": "Jeans",
            "image": "https://images.unsplash.com/photo-1578939662863-5cd416d45a69?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
        },
        {
            "id": 3,
            "name": "White T-Shirt",
            "price": 49.99,
            "rating": 4.3,
            "category": "Apparel",
            "subcategory": "Shirts",
            "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjB0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D"
        },
        {
            "id": 4,
            "name": "Suit",
            "price": 49.99,
            "rating": 4.8,
            "category": "Apparel",
            "subcategory": "Suits",
            "image": "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8c3VpdHx8MHx8fHwxNjMzMTQyMjc1&ixlib=rb-1.2.1&q=80&w=1080"
        },
        {
            "id": 5,
            "name": "Product 5",
            "price": 49.99,
            "rating": 3.9,
            "category": "Unknown",
            "image": "https://tse2.mm.bing.net/th?id=OIP.h73loFi8KWgUP71ELaCTCgHaHa&pid=Api&P=0&h=180"
        },
        {
            "id": 6,
            "name": "Product 6",
            "price": 49.99,
            "rating": 4.1,
            "category": "Unknown",
            "image": "https://images.hindustantimes.com/tech/img/2024/05/21/960x540/quinn-battick-ZvtYlEeA44I-unsplash_1692603190912_1716270884882.jpg"
        },
        {
            "id": 7,
            "name": "Leather Shoe",
            "price": 49.99,
            "rating": 4.6,
            "category": "Footwear",
            "subcategory": "Shoes",
            "image": "https://images.unsplash.com/photo-1621881538090-b2b5ffaa996a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8bGVhdGhlciUyMHNob2V8fDB8fHx8MTYyNjgzNTY1MA&ixlib=rb-1.2.1&q=80&w=1080"
        },
        {
            "id": 8,
            "name": "Women's Shoes",
            "price": 49.99,
            "rating": 4.7,
            "category": "Footwear",
            "subcategory": "Shoes",
            "image": "https://images.unsplash.com/photo-1534653299134-96a171b61581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8d29tZW4lMjBzaG9lc3x8MHx8fHwxNjE5NzkyODYz&ixlib=rb-1.2.1&q=80&w=1080"
        },
        {
            "id": 9,
            "name": "Dolo 650",
            "price": 49.99,
            "rating": 4.9,
            "category": "Health",
            "subcategory": "Medicine",
            "image": "https://5.imimg.com/data5/SELLER/Default/2022/3/TB/NK/SI/41798655/dolo-650-tablets-1000x1000.jpg"
        }
    ]
]

// {
//     "id": 1,
//     "name": "Classic White Sneakers",
//     "price": 129.99,
//     "rating": 5,
//     "category": "footwear",
//     "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800"
// }

const clothesProducts = document.getElementById('clothesProducts')

const checkboxFootwear = document.getElementById("checkboxFootwear")
// console.log(checkboxFootwear.checked);

// if(checkboxFootwear.checked) {

// }


// function filteringFootwears() {


//     return 
// }



for (let i = 0; i < 100; i++) {


    let cardContainer = document.createElement('div');
    let cardImg = document.createElement('img');
    // cardImg = document.createAttribute('src')
    let cardHeading = document.createElement('h3');
    let cardPrice = document.createElement('p');
    const cardButton = document.createElement('button');

    clothesProducts.appendChild(cardContainer);
    cardContainer.appendChild(cardImg)
    cardContainer.appendChild(cardHeading)
    cardContainer.appendChild(cardPrice)
    cardContainer.appendChild(cardButton)


    cardImg.src = products[i].image;
    cardHeading.textContent = products[i].name;
    cardPrice.textContent = `Rs ${products[i].price}`;
    cardButton.textContent = "Add to Cart"




}