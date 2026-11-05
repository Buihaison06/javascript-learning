let products = [
  { id: "SP01", name: "Laptop", price: 15000000, quantity: 0 },
  { id: "SP02", name: "Mouse", price: 250000, quantity: 0 },
  { id: "SP03", name: "Keyboard", price: 750000, quantity: 7 },
  { id: "SP04", name: "Monitor", price: 3500000, quantity: 3 },
  { id: "SP05", name: "Headphone", price: 1200000, quantity: 8 },
];

const showProducts = (products) => {
  console.log("======Danh Sách Sản Phẩm======");
  products.forEach((pr, index) => {
    console.log(
      index +
        1 +
        ". " +
        pr.id +
        " - " +
        pr.name +
        " - " +
        pr.price +
        " - " +
        pr.quantity,
    );
  });
};
const calculateQuantityProducts = (products) =>
  products.reduce((sum, pr) => sum + pr.quantity, 0);
const calculateInventoryValue = (products) => {
  let x = products.reduce((sum, pr) => {
    return sum + pr.quantity * pr.price;
  }, 0);
  return x;
};
const filterExpensiveProducts = (products) =>
  products.filter((pr) => pr.price > 1000000);
const getProductsName = (products) => {
  let x = products.map((pr) => pr.name);
  return x;
};
const getOutOfStockProducts = (products) => {
  let x = products.filter((pr) => pr.quantity === 0);
  return x;
};
const getCheapestProduct = (products) => {
  let x = Math.min(...products.map((pr) => pr.price));
  return products.find((pr) => pr.price === x);
};
const totalValueByProducts = (products) => {
  return products.map((pr) => {
    return {
      id: pr.id,
      name: pr.name,
      ProductValue: pr.quantity * pr.price,
    };
  });
};
const showProductInfo = (products) => {
  console.log("======Danh Sách Sản Phẩm======");
  products.forEach((pr, index) => {
    console.log(
      `${index + 1}. ${pr.id} - ${pr.name} - ${pr.price} - ${pr.quantity}`,
    );
  });
};
const generateProductsReport = (products) =>
  products
    .map((pr, index) => {
      return `${index + 1}. ${pr.name}
      Mã: ${pr.id}
      Giá: ${pr.price}
      Số Lượng: ${pr.quantity}
      Giá Trị Tồn Kho: ${pr.quantity * pr.price}
      Trạng Thái: ${pr.quantity === 0 ? "Hết Hàng" : "Còn Hàng"}
      `;
    })
    .join(`\n`);
showProductInfo(products);
console.log("Tổng Số Lượng Sản Phẩm là: ", calculateQuantityProducts(products));
console.log(
  "Tổng Giá Trị Hàng Tồn Kho là: ",
  calculateInventoryValue(products),
);
console.log("======Danh Sách Sản Phẩm Có Giá Trên 1 Triệu======");
console.log(filterExpensiveProducts(products));
console.log("Mảng Chỉ Chứa Tên Sản Phẩm: ", getProductsName(products));
if (getOutOfStockProducts(products).length === 0) {
  console.log("Sản Phẩm Hết Hàng: 0");
} else {
  console.log("Sản Phẩm Hết Hàng: ", getOutOfStockProducts(products).length);
  console.log(getOutOfStockProducts(products));
}
console.log("Sản phẩm có giá rẻ nhất: ", getCheapestProduct(products));
console.log("=====Danh Sách Giá Trị Tồn Kho======");
console.log(totalValueByProducts(products));
console.log("========== PRODUCT REPORT ==========");
console.log(generateProductsReport(products));
