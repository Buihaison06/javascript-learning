const products = [
  {
    id: "SP01",
    name: "Laptop",
    price: 15000000,
    quantity: 5,
    category: "Electronics",
    details: {
      manufacturer: "Dell",
      warranty: 24,
    },
  },
  {
    id: "SP02",
    name: "Mouse",
    price: 250000,
    quantity: 10,
    category: "Accessories",
    details: {
      manufacturer: "Logitech",
      warranty: 12,
    },
  },
  {
    id: "SP03",
    name: "Keyboard",
    price: 750000,
    quantity: 7,
    category: "Accessories",
    details: {
      manufacturer: "Akko",
      warranty: 12,
    },
  },
  {
    id: "SP04",
    name: "Monitor",
    price: 3500000,
    quantity: 0,
    category: "Electronics",
    details: null,
  },
  {
    id: "SP05",
    name: "Headphone",
    price: 1200000,
    quantity: 8,
    category: "Accessories",
  },
];

//1.Viết hàm showProducts(products) để hiển thị toàn bộ thông tin sản phẩm bằng Template Literals.
//19.Hiển thị tên nhà sản xuất của từng sản phẩm. Nếu không có thì hiển thị "Unknown".
//20.Hiển thị thời gian bảo hành. Nếu không có thì mặc định 12 tháng.

const showProducts = (products) => {
  products.forEach((pr) => {
    console.log(`
      Id : ${pr.id}
      Name : ${pr.name ?? "Unknown"}
      Price : ${pr.price}
      Quantity : ${pr.quantity ?? 0}
      Category : ${pr.category}
      Manufacturer : ${pr.details?.manufacturer ?? "Unknown"}
      Warranty : ${pr.details?.warranty ?? 12}
      `);
  });
};

//2.Viết hàm calculateProductValue(product) tính tổng giá trị của một sản phẩm (price * quantity).
const calculateProductValue = (pr) => {
  return pr.quantity * pr.price;
};

//3.Dùng Destructuring lấy id, name, price của Laptop.
//4.Dùng Destructuring đổi tên name thành productName, price thành productPrice
const { id, name: productName, price: productPrice } = products[0];

//5.Dùng Array Destructuring lấy: Sản phẩm đầu tiên, Sản phẩm thứ hai, Các sản phẩm còn lại.
const [a, b, ...rest] = products;

//6.Tạo sản phẩm mới SP06 – Webcam, giá 900000, số lượng 4, danh mục Accessories. Dùng Spread thêm sản phẩm vào mảng mới, không sửa mảng ban đầu
const newProduct = {
  id: "SP06",
  name: "Webcam",
  price: 900000,
  quantity: 4,
  category: "Accessories",
  details: null,
};
const newProducts = [newProduct, ...products];

//7.Viết hàm Arrow Function calculateTotalValue(...numbers) sử dụng Rest Parameters và reduce() để tính tổng các số truyền vào.
const calculateTotalValue = (...numbers) => {
  return numbers.reduce((total, number) => total + number, 0);
};

//8.Viết hàm calculateDiscount(price, quantity = 1, discount = 0) tính giá sau giảm giá.
const calculateDiscount = (price, quantity = 1, discount = 0) => {
  return price * quantity * (1 - discount);
};

//9.Tạo object store có : storeName: "My Store", location: "Ha Noi", products: mảng sản phẩm., Phương thức calculateTotalQuantity() tính tổng số lượng sản phẩm.
const store = {
  storeName: "My Store",
  location: "Ha Noi",
  products,
  calculateTotalQuantity() {
    return this.products.reduce((total, pr) => total + pr.quantity, 0);
  },
};

//10.Tạo object statistics sử dụng Computed Property Names, gồm: totalProducts, totalQuantity, totalValue, outOfStock
const key1 = "totalProducts";
const key2 = "totalQuantity";
const key3 = "totalValue";
const key4 = "outOfStock";

const statistics = {
  [key1]: products.length,
  [key2]: store.calculateTotalQuantity(),
  [key3]: products.reduce((total, pr) => total + calculateProductValue(pr), 0),
  [key4]: products.filter((pr) => pr.quantity === 0).length,
};

//11.Dùng filter() tìm tất cả sản phẩm còn hàng (quantity > 0).
let x = products.filter((pr) => pr.quantity > 0);

//12.Dùng map() tạo mảng mới chỉ chứa name và price của từng sản phẩm
let y = products.map((pr) => {
  return {
    name: pr.name,
    price: pr.price,
  };
});

//13.Dùng find() tìm sản phẩm có ID "SP03".
let z = products.find((pr) => pr.id === "SP03");

//14.Dùng findIndex() tìm vị trí sản phẩm có ID "SP04"
let m = products.findIndex((pr) => pr.id === "SP04");

//15.Dùng some() kiểm tra có sản phẩm nào hết hàng không.
let n = products.some((pr) => pr.quantity === 0);

//16.Dùng every() kiểm tra tất cả sản phẩm có giá lớn hơn 0 không.
let p = products.every((pr) => pr.price > 0);

//17.Dùng sort() sắp xếp sản phẩm theo giá giảm dần.
let sortArray = [...products].sort((a, b) => b.price - a.price);

//18.Dùng reduce() tính tổng giá trị kho hàng.
let productsValue = products.reduce(
  (total, pr) => total + calculateProductValue(pr),
  0,
);

//hàm tìm sản phẩm đắt nhất
const findMostExpensiveProduct = (products) => {
  let prices = products.map((pr) => pr.price);
  let x = Math.max(...prices);
  let y = products.findIndex((pr) => pr.price === x);
  return products[y].name;
};
//hàm tìm sản phẩm rẻ nhất
const findCheapestProduct = (products) => {
  let prices = products.map((pr) => pr.price);
  let x = Math.min(...prices);
  let y = products.findIndex((pr) => pr.price === x);
  return products[y].name;
};

//22.Viết hàm showInventoryReport() hiển thị báo cáo kho hàng

const showInventoryReport = () => {
  console.log(`
    ========== INVENTORY REPORT ==========

    Store: ${store.storeName}
    Location: ${store.location}
    
    Total products: ${statistics.totalProducts}
    Total Quantity: ${statistics.totalQuantity}
    Total inventory value: ${productsValue.toLocaleString("vi-VN")}
    Out of stock: ${statistics.outOfStock}
    Available products: ${x.length}
    Most expensive product: ${findMostExpensiveProduct(products)}
    Cheapest product: ${findCheapestProduct(products)}

    ======================================
    `);
};
showInventoryReport();
