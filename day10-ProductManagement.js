let products = [
  { id: "SP01", name: "Laptop", price: 15000000, quantity: 5 },
  { id: "SP02", name: "Mouse", price: 250000, quantity: 10 },
  { id: "SP03", name: "Keyboard", price: 750000, quantity: 7 },
  { id: "SP04", name: "Monitor", price: 3500000, quantity: 3 },
  { id: "SP05", name: "Headphone", price: 1200000, quantity: 8 },
];

function showProduct(products) {
  console.log("======Danh Sách Sản Phẩm======");
  products.forEach((pr, index) =>
    console.log(
      index +
        1 +
        "." +
        pr.id +
        " - " +
        pr.name +
        " - " +
        pr.price +
        " - " +
        pr.quantity,
    ),
  );
}
function calculateInventoryValue(products) {
  let x = products.reduce((sum, pr) => {
    return (sum += pr.quantity * pr.price);
  }, 0);
  return x;
}
function getProductStatistics(products) {
  let object = {
    totalProducts: products.length,
    totalQuantity: calculateTotalQuantity(products),
    totalValue: calculateInventoryValue(products),
    mostExpensive: mostExpensiveProduct(products),
    cheapest: mostCheapestProduct(products),
    outOfStock: products.filter((pr) => pr.quantity === 0).length,
    lowStock: products.filter((pr) => pr.quantity > 0 && pr.quantity < 5)
      .length,
  };
  return object;
}
function getProductsName(prs) {
  let x = prs.map((pr) => pr.name);
  return x;
}
function mostExpensiveProduct(products) {
  let x = Math.max(...products.map((pr) => pr.price));
  return products.find((pr) => pr.price === x);
}
function mostCheapestProduct(products) {
  let x = Math.min(...products.map((pr) => pr.price));
  return products.find((pr) => pr.price === x);
}
function filterExpensiveProducts(prs) {
  let x = prs.filter((pr) => pr.price > 1000000);
  return x;
}
function findProduct(id) {
  let x = products.find((pr) => pr.id === id);
  return x;
}
function addProduct(products, i, n, p, q) {
  let x = products.some(
    (pr) =>
      pr.id.toLowerCase() === i.toLowerCase() ||
      pr.name.toLowerCase() === n.toLowerCase(),
  );
  i = i.trim().toUpperCase();
  n = capitalizeName(n);
  let newproduct = {
    id: i,
    name: n,
    price: p,
    quantity: q,
  };
  if (x === true) {
    console.log("Trùng id hoặc tên sản phẩm");
    rl.close();
    return;
  } else {
    products.push(newproduct);
    console.log("Thêm thành công");
    console.log("======Danh sách sản phẩm======");
    showProduct(products);
  }
}
function calculateTotalQuantity(prs) {
  let x = prs.reduce((sum, pr) => {
    return (sum += pr.quantity);
  }, 0);
  return x;
}
function checkTonTai(products, id) {
  let x = products.some(
    (pr) => pr.id.toLowerCase() === id.trim().toLowerCase(),
  );
  if (!x) {
    return false;
  } else return true;
}
function updateProduct(products, id, name, price, quantity) {
  let x = products.findIndex((pr) => pr.id.toLowerCase() === id.toLowerCase());
  if (x === -1) {
    console.log("Không tìm thấy sản phẩm");
    return;
  }
  if (
    products[x].name === name &&
    products[x].quantity === quantity &&
    products[x].price === price
  ) {
    let x = console.log("Sửa không thành công");
    return x;
  }
  products[x].name = name;
  products[x].price = price;
  products[x].quantity = quantity;
  console.log("Sửa thành công");
  showProduct(products);
}
function deleteProducts(products, id) {
  let x = products.findIndex((pr) => pr.id.toLowerCase() === id.toLowerCase());
  if (x === -1) {
    console.log("Không tìm thấy sản phẩm");
    return;
  }
  products.splice(x, 1);
  console.log("Xoá Thành Công");
  showProduct(products);
}
function capitalizeName(name) {
  return name
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
function sortProductsByPrice(products) {
  let x = products.sort((a, b) => a.price - b.price);
  console.log("======Danh Sách Sản Phẩm theo giá tăng dần======");
  showProduct(x);

  let y = products.sort((a, b) => b.price - a.price);
  console.log("======Danh Sách Sản Phẩm theo giá giảm dần======");
  showProduct(y);
}
function searchProduct(products, id) {
  id = id.toUpperCase();
  let x = products.find((pr) => pr.id === id);
  return x;
}
function filterProductsByStock(products) {
  let x = products.filter((pr) => pr.quantity === 0);
  let y = products.filter((pr) => pr.quantity < 5 && pr.quantity > 0);
  let z = products.filter((pr) => pr.quantity >= 5);
  if (x.length === 0) {
    console.log("Hết hàng: ", x.length);
  } else {
    console.log("Hết hàng: ", x.length, x);
  }
  if (y.length === 0) {
    console.log("Sắp hết hàng: ", y.length);
  } else {
    console.log("Sắp hết hàng: ", y.length, y);
  }
  if (z.length === 0) {
    console.log("Còn hàng: ", z.length);
  } else {
    console.log("Còn hàng: ", z.length, z);
  }
}
function checkTrung(products, xx) {
  let x = products.some(
    (pr) =>
      pr.id.toLowerCase() === xx.trim().toLowerCase() ||
      pr.name.toLowerCase() === xx.trim().toLowerCase(),
  );
  return x;
}
function checkTrungSua(products, id, name) {
  let x = products.findIndex(
    (pr) => pr.id.toLowerCase() === id.trim().toLowerCase(),
  );
  let y = products.map((pr) => pr.name);
  if (name !== products[x].name && y.some((y) => y === name) === true) {
    return true;
  }
}
function select(lc) {
  switch (lc) {
    case 0:
      console.log("Bạn chọn Thoát Chương Trình");
      rl.close();
      break;
    case 1:
      showProduct(products);
      break;
    case 2:
      console.log("======Thêm Sản Phẩm======");
      rl.question("Nhập id: ", (id) => {
        id = id.trim();
        if (!id) {
          console.log("Lỗi");
          rl.close();
          return;
        }
        let y = checkTrung(products, id);
        if (y === true) {
          console.log("ID Tồn tại");
          rl.close();
          return;
        }
        rl.question("Nhập name: ", (name) => {
          name = name.trim();
          if (!name) {
            console.log("Lỗi");
            rl.close();
            return;
          }
          let x = checkTrung(products, name);
          if (x === true) {
            console.log("Name Tồn tại");
            rl.close();
            return;
          }
          rl.question("Nhập price: ", (price) => {
            price = Number(price.trim());
            if (price <= 0 || !Number.isFinite(price)) {
              console.log("Lỗi");
              rl.close();
              return;
            }
            rl.question("Nhập quantity: ", (quantity) => {
              if (!quantity.trim()) {
                console.log("Lỗi");
                rl.close();
                return;
              }
              quantity = Number(quantity.trim());
              if (quantity < 0 || !Number.isInteger(quantity)) {
                console.log("Lỗi");
                rl.close();
                return;
              }
              addProduct(products, id, name, price, quantity);
            });
          });
        });
      });
      break;
    case 3:
      console.log("======Sửa Sản Phẩm======");
      rl.question("Nhập ID Cần Sửa: ", (id) => {
        id = id.trim();
        if (!id) {
          console.log("Lỗi");
          rl.close();
          return;
        }
        let x = checkTonTai(products, id);
        if (x === false) {
          console.log("Không tìm thấy sản phẩm");
          rl.close();
          return;
        }
        rl.question("Nhập Name: ", (name) => {
          name = name.trim();
          if (!name) {
            console.log("Lỗi");
            rl.close();
            return;
          }
          name = capitalizeName(name);
          let u = checkTrungSua(products, id, name);
          if (u === true) {
            console.log("Trùng Name");
            rl.close();
            return;
          }
          rl.question("Nhập price: ", (price) => {
            if (!price.trim()) {
              console.log("Lỗi");
              rl.close();
              return;
            }
            price = Number(price.trim());
            if (price <= 0 || !Number.isFinite(price)) {
              console.log("Lỗi");
              rl.close();
              return;
            }
            rl.question("Nhập quantity: ", (quantity) => {
              if (!quantity.trim()) {
                console.log("Lỗi");
                rl.close();
                return;
              }
              quantity = Number(quantity.trim());
              if (!Number.isInteger(quantity) || quantity < 0) {
                console.log("Lỗi");
                rl.close();
                return;
              }
              updateProduct(products, id, name, price, quantity);
            });
          });
        });
      });
      break;
    case 4:
      console.log("======Xoá Sản Phẩm======");
      rl.question("Nhập ID cần xoá: ", (id) => {
        id = id.trim();
        if (!id) {
          console.log("Lỗi");
          rl.close();
          return;
        }
        let x = checkTonTai(products, id);
        if (x === false) {
          console.log("ID không tồn tại");
          rl.close();
          return;
        }
        deleteProducts(products, id);
      });
      break;
    case 5:
      console.log("======Tìm Kiếm Sản Phẩm======");
      rl.question("Nhập ID cần tìm kiếm: ", (id) => {
        id = id.trim();
        if (!id) {
          console.log("Lỗi");
          rl.close();
          return;
        }
        let x = searchProduct(products, id);
        if (x === undefined) {
          console.log("Không tìm thấy Sản Phẩm");
          rl.close();
          return;
        }
        console.log("Tìm thấy sản phẩm: ", x);
      });
      break;
    case 6:
      console.log("======Lọc sản phẩm theo tồn kho======");
      console.log("1. Sản phẩm hết hàng");
      console.log("2. Sản phẩm sắp hết hàng");
      console.log("3. Sản phẩm còn hàng");
      console.log("4. Tất cả sản phẩm");
      rl.question("Nhập lựa chọn: ", (lcl) => {
        if (
          !lcl.trim() ||
          !Number.isInteger(Number(lcl)) ||
          lcl > 4 ||
          lcl < 1
        ) {
          console.log("Lỗi");
          return;
        }
        lcl = Number(lcl);
        switch (lcl) {
          case 1:
            console.log("======Sản phẩm hết hàng======");
            let x = products.filter((pr) => pr.quantity === 0);
            console.log(x);
            break;
          case 2:
            console.log("======Sản phẩm sắp hết hàng======");
            let y = products.filter((pr) => pr.quantity > 0 && pr.quantity < 5);
            console.log(y);
            break;
          case 3:
            console.log("======Sản phẩm còn hàng======");
            let z = products.filter((pr) => pr.quantity >= 5);
            console.log(z);
            break;
          case 4:
            showProduct(products);
            console.log("Tổng số sản phẩm: ", products.length);
            console.log(
              "Tổng số lượng tồn kho: ",
              products.reduce((sum, pr) => {
                return sum + pr.quantity;
              }, 0),
            );
            break;
          default:
            console.log("Lỗi");
            break;
        }
      });
      break;
    case 7:
      console.log("========== THỐNG KÊ SẢN PHẨM ==========");
      console.log("Tổng số sản phẩm: ", products.length);
      console.log("Tổng số lượng tồn kho: ", calculateTotalQuantity(products));
      console.log("Tổng giá trị kho: ", calculateInventoryValue(products));
      console.log("Sản phẩm đắt nhất: ", mostExpensiveProduct(products));
      console.log("Sản phẩm rẻ nhất: ", mostCheapestProduct(products));
      console.log(
        "Số sản phẩm hết hàng: ",
        products.filter((pr) => pr.quantity === 0).length,
      );
      console.log(
        "Số sản phẩm sắp hết hàng: ",
        products.filter((pr) => pr.quantity > 0 && pr.quantity < 5).length,
      );
      break;
    case 8:
      sortProductsByPrice(products);
      break;
    default:
      console.log("Lỗi");
      break;
  }
}
showProduct(products);
console.log("==========QUẢN LÝ SẢN PHẨM==========");
console.log("\n1. Hiển thị danh sách sản phẩm");
console.log("2. Thêm sản phẩm");
console.log("3. Sửa sản phẩm");
console.log("4. Xóa sản phẩm");
console.log("5. Tìm kiếm sản phẩm");
console.log("6. Lọc sản phẩm theo tồn kho");
console.log("7. Thống kê sản phẩm");
console.log("8. Sắp xếp sản phẩm theo giá");
console.log("0. Thoát chương trình");
console.log("\n==================================");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Nhập lựa chọn của bạn: ", (lc) => {
  if (!lc.trim() || !Number.isInteger(Number(lc)) || lc < 0 || lc > 8) {
    console.log("Lỗi");
    return;
  }
  lc = Number(lc);
  select(lc);
});
