const products = [
  {
    id: "SP01",
    name: "Laptop",
    price: 15000000,
    quantity: 5,
    category: "Electronics",
  },
  {
    id: "SP02",
    name: "Mouse",
    price: 250000,
    quantity: 10,
    category: "Accessories",
  },
  {
    id: "SP03",
    name: "Keyboard",
    price: 750000,
    quantity: 7,
    category: "Accessories",
  },
  {
    id: "SP04",
    name: "Monitor",
    price: 3500000,
    quantity: 0,
    category: "Electronics",
  },
  {
    id: "SP05",
    name: "Headphone",
    price: 1200000,
    quantity: 8,
    category: "Accessories",
  },
];

//câu 1
const showProduct = (pr) => {
  console.log(`
    Id: ${pr.id}
    Tên: ${pr.name}
    Giá: ${pr.price}
    Số Lượng: ${pr.quantity}
    Danh Mục: ${pr.category}
    `);
};

//câu 2
const calculateProductValue = (pr) => {
  return pr.price * pr.quantity;
};

//câu 3
const { id, name, price } = products[0];

//câu 4
const { name: productName, price: priceName } = products[0];

//câu 5
const [firstProduct, secondProduct, ...remainingProducts] = products;

//câu 6
const newProduct = {
  id: "SP06",
  name: "Webcam",
  price: 900000,
  quantity: 4,
  category: "Accessories",
};
const updatedProducts = [newProduct, ...products];

//câu 7
const updatedProduct = {
  ...products[0],
  price: 14000000,
  quantity: 6,
};

//câu 8
const calculateTotalValue = (...numbers) => {
  return numbers.reduce((total, number) => total + number, 0);
};

//câu 9
const calculateDiscount = (price, quantity = 1, discount = 0) => {
  return price * quantity * (1 - discount);
};

//câu 10,11
const totalProducts = products.length;
const storeName = "My Store";
const location = "Ha Noi";
const statistics = {
  totalProducts,
  storeName,
  location,
  calculateTotalQuantity() {
    return products.reduce((total, pr) => total + pr.quantity, 0);
  },
};

//câu 12
const key1 = "totalValue";
const key2 = "totalQuantity";
const key3 = "outOfStock";

const object = {
  [key1]: products.reduce((total, pr) => total + calculateProductValue(pr), 0),
  [key2]: products.reduce((sum, pr) => {
    return sum + pr.quantity;
  }, 0),
  [key3]: products.filter((pr) => pr.quantity === 0).length,
};

console.log("========== PRODUCT STATISTICS ==========");
console.log(`
  Store: ${statistics.storeName}
  Location: ${statistics.location}

  Total products: ${statistics.totalProducts}
  Total quantity: ${object.totalQuantity}
  Total inventory value: ${products.reduce((sum, pr) => {
    return sum + calculateProductValue(pr);
  }, 0)}
  Out of stock: ${object.outOfStock}
  `);
