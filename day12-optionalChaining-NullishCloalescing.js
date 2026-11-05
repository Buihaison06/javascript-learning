const products = [
  {
    id: "SP01",
    name: "Laptop",
    price: 15000000,
    quantity: 5,
    details: {
      manufacturer: "Dell",
      warranty: 24,
    },
  },
  {
    id: "SP02",
    name: "Mouse",
    price: 250000,
    quantity: 0,
    details: null,
  },
  {
    id: "SP03",
    name: "Keyboard",
    price: 750000,
    quantity: 7,
  },
];

//1.In tên nhà sản xuất của Laptop.
//4.Nếu sản phẩm không có nhà sản xuất, hiển thị "Unknown"
console.log(
  `Tên nhà sản xuất Laptop: ${products[0].details?.manufacturer ?? "Unknown"}`,
);

//2.In tên nhà sản xuất của Mouse, không được để chương trình báo lỗi.
//4.Nếu sản phẩm không có nhà sản xuất, hiển thị "Unknown"
console.log(
  `Tên nhà sản xuất Mouse: ${products[1].details?.manufacturer ?? "Unknown"}`,
);

//3.In thời gian bảo hành của Keyboard, không được để chương trình báo lỗi.
//5.Nếu sản phẩm không có thời gian bảo hành, mặc định là 12 tháng.
console.log(
  `Thời gian bảo hành của Keyboard: ${products[2].details?.warranty ?? 12}`,
);

//6.Nếu số lượng sản phẩm bằng 0, vẫn phải hiển thị 0, không được thay bằng 100.
console.log(
  `Số lượng sản phẩm: ${products.reduce((total, pr) => total + pr.quantity, 0) ?? 100}`,
);

//7.Viết hàm showProductInfo(product)
const showProductInfo = (products) => {
  products
    .filter((pr) => pr.quantity > 0)
    .forEach((pr) => {
      console.log(`
      Tên sản phẩm : ${pr.name}
      Nhà sản xuất: ${pr.details?.manufacturer ?? "Unknown"}
      Bảo hành: ${pr.details?.warranty ?? "12 tháng"}
      Số lượng : ${pr.quantity ?? 0}
    `);
    });
};

showProductInfo(products);
