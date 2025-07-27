const products = [
  { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
  { id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
  { id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
  { id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
];

const taxedProducts = products.map((product) => {
  return {
    ...product,
    priceWithTax: (product.price * 1.15).toFixed(2)
  };
});

console.log("Produtos com preço + 15% de imposto:");
console.log(taxedProducts);