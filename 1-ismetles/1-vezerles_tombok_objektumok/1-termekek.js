const products = [
    {
        name: "Televízió",
        price: 80000,
        category: "Elektronika"
    },
    {
        name: "Hűtőszekrény",
        price: 120000,
        category: "Háztartási gépek"
    },
    {
        name: "Mosógép",
        price: 100000,
        category: "Háztartási gépek"
    },
    { 
        name: "Laptop",
        price: 150000,
        category: "Elektronika"
    },
    {
        name: "Kávéfőző",
        price: 25000,
        category: "Konyhai eszközök"
    }
];

let cheapest = products[0];
for (const product of products) {
    if (product.price < cheapest.price) {
        cheapest = product;
    }
}
// console.log(`Legolcsóbb termék: ${cheapest.name} (${cheapest.category})`);
