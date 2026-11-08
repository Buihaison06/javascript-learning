let transactions = [
  {
    id: "GD001",
    customer: "  bUi hAi sOn ",
    email: " SON@GMAIL.COM ",
    phone: "0987654321",
    amount: 15000000,
    discount: 10,
    createdAt: new Date(2026, 0, 10),
    status: "completed",
  },
  {
    id: "GD002",
    customer: " nGuYeN vAn mInH ",
    email: " MINH@GMAIL.COM ",
    phone: "0912345678",
    amount: 8500000,
    discount: 5,
    createdAt: new Date(2026, 2, 20),
    status: "pending",
  },
  {
    id: "GD003",
    customer: " tRan vAn kHaI ",
    email: " KHAI@GMAIL.COM ",
    phone: "0901234567",
    amount: 22000000,
    discount: 15,
    createdAt: new Date(2025, 10, 7),
    status: "completed",
  },
  {
    id: "GD004",
    customer: "  lE vAn bInH ",
    email: " BINH@GMAIL.COM ",
    phone: "0977777777",
    amount: 5000000,
    discount: 0,
    createdAt: new Date(2026, 5, 15),
    status: "cancelled",
  },
  {
    id: "GD005",
    customer: "  pHaM tHi mInH ",
    email: " MINH2@GMAIL.COM ",
    phone: "0966666666",
    amount: 12000000,
    discount: 20,
    createdAt: new Date(2026, 10, 5),
    status: "completed",
  },
];

//1.formatCustomerName(transactions)
const formatCustomerName = (transactions) => {
  if (transactions.length === 0) {
    console.log("Mảng rỗng");
    return;
  }
  transactions.forEach((tr) => {
    tr.customer = tr.customer
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  });
};
formatCustomerName(transactions);

//2.formatEmail(transactions)
const formatEmail = (transactions) => {
  if (transactions.length === 0) {
    console.log("Mảng rỗng");
    return;
  }
  transactions.forEach((tr) => {
    tr.email = tr.email.trim().toLowerCase();
    if (!tr.email.endsWith(".com")) {
      console.log("email sai định dạng");
      return;
    }
  });
};
formatEmail(transactions);

//3.formatPhone(transactions)
const formatPhone = (transactions) => {
  if (transactions.length === 0) {
    console.log("Mảng rỗng");
    return;
  }
  transactions.forEach((tr) => {
    if (!tr.phone) {
      console.log("Phone không hợp lệ");
      return;
    }
    tr.phone = tr.phone.trim();
    if (!/^\d{10}$/.test(tr.phone)) {
      console.log("Phone không hợp lệ");
      return;
    }
  });
};
formatPhone(transactions);

//4.formatTransactionId(transactions)
const formatTransactionId = (transactions) => {
  if (transactions.length === 0) {
    console.log("Mảng rỗng");
    return;
  }
  transactions.forEach((tr) => {
    tr.id = tr.id.trim().toUpperCase();
    if (!/^GD\d{3}$/.test(tr.id)) {
      console.log("Id sai định dạng");
      return;
    }
  });
};
formatTransactionId(transactions);

//5.calculateFinalAmount(transaction)
const calculateFinalAmount = (tr) => {
  return tr.amount * (1 - tr.discount / 100);
};

//6.calculateTotalRevenue(transactions)
const calculateTotalRevenue = (transactions) => {
  if (transactions.length === 0) {
    return 0;
  }
  let x = transactions.filter((tr) => tr.status === "completed");
  if (x.length === 0) {
    return 0;
  } else {
    let y = x.reduce((total, tr) => total + calculateFinalAmount(tr), 0);
    return y;
  }
};

//10.formatTransactionDate(transaction)
const formatTransactionDate = (tr) => {
  return `${String(tr.createdAt.getDate()).padStart(2, "0")}/${String(tr.createdAt.getMonth() + 1).padStart(2, "0")}/${tr.createdAt.getFullYear()}`;
};

//7.getHighestTransaction(transactions)
const getHighestTransaction = (transactions) => {
  let m = transactions.filter((tr) => tr.status === "completed");
  if (m.length === 0) {
    return null;
  }
  let y = m.map((tr) => calculateFinalAmount(tr));
  let x = Math.max(...y);
  let z = m.findIndex((tr) => calculateFinalAmount(tr) === x);
  return `${m[z].id} - ${m[z].customer} - ${formatTransactionDate(m[z])} - ${x.toLocaleString("vi-VN")}`;
};

//getLowestTransaction(transactions)
const getLowestTransaction = (transactions) => {
  let m = transactions.filter((tr) => tr.status === "completed");
  if (m.length === 0) {
    return null;
  }
  let y = m.map((tr) => calculateFinalAmount(tr));
  let x = Math.min(...y);
  let z = m.findIndex((tr) => calculateFinalAmount(tr) === x);
  return `${m[z].id} - ${m[z].customer} - ${formatTransactionDate(m[z])} - ${x.toLocaleString("vi-VN")}`;
};
//8.calculateAverageTransaction(transactions)
const calculateAverageTransaction = (transactions) => {
  if (transactions.length === 0) {
    return 0;
  }
  let x = transactions.filter((tr) => tr.status === "completed");
  if (x.length === 0) {
    return 0;
  } else {
    let y =
      x.reduce((total, tr) => total + calculateFinalAmount(tr), 0) / x.length;
    return Number(y.toFixed(2));
  }
};

//9.calculateDiscountStatistics(transactions)
const calculateDiscountStatistics = (transactions) => {
  if (transactions.length === 0) {
    console.log("Mảng rỗng");
    return;
  }
  let x = transactions.reduce(
    (total, tr) => total + (tr.amount * tr.discount) / 100,
    0,
  );
  let y = transactions.map((tr) => tr.discount);
  let z = Math.max(...y);
  let m = Math.min(...y);
  let n =
    transactions.reduce((total, tr) => total + tr.discount, 0) /
    transactions.length;
  return {
    totalDiscount: x,
    highestDiscount: z,
    lowestDiscount: m,
    averageDiscount: n,
  };
};

//11.getTransactionAge(transactions)
const getTransactionAge = (transactions) => {
  let toDay = new Date();
  return transactions.map((tr) => {
    let x = toDay.getTime() - tr.createdAt.getTime();
    return Math.floor(x / (1000 * 60 * 60 * 24));
  });
};

//12.getTransactionsByMonth(transactions, month, year)
const getTransactionsByMonth = (transactions, month, year) => {
  let x = transactions.filter(
    (tr) =>
      tr.createdAt.getMonth() + 1 === month &&
      tr.createdAt.getFullYear() === year,
  );
  return x;
};

//13.getOldestTransaction(transactions)
const getOldestTransaction = (transactions) => {
  if (transactions.length === 0) {
    return null;
  }
  let oldestDate = transactions[0].createdAt.getTime();
  transactions.forEach((tr) => {
    if (tr.createdAt.getTime() < oldestDate) {
      oldestDate = tr.createdAt.getTime();
    }
  });
  let x = transactions.find((pr) => pr.createdAt.getTime() === oldestDate);
  return x;
};

//chuẩn hoá thứ trong tuần
const formatDayOfWeek = (day) => {
  switch (day) {
    case 0:
      return "Chủ Nhật";
    case 1:
      return "Thứ Hai";
    case 2:
      return "Thứ Ba";
    case 3:
      return "Thứ Tư";
    case 4:
      return "Thứ Năm";
    case 5:
      return "Thứ Sáu";
    case 6:
      return "Thứ Bảy";
    default:
      return "Không Xác Định";
  }
};

//14.getTransactionWeekday(transactions)
const getTransactionWeekday = (transactions) => {
  return transactions.map((tr) => {
    return `${tr.id}: ${formatDayOfWeek(tr.createdAt.getDay())}`;
  });
};

//15.getTransactionStatistics(transactions)
const getTransactionStatistics = (transactions) => {
  return `
    totalTransactions: ${transactions.length},
    completedTransactions: ${
      transactions.filter((tr) => tr.status === "completed").length
    },
    pendingTransactions: ${
      transactions.filter((tr) => tr.status === "pending").length
    },
    cancelledTransactions: ${
      transactions.filter((tr) => tr.status === "cancelled").length
    },
    totalRevenue: ${calculateTotalRevenue(transactions)},
    averageRevenue: ${calculateAverageTransaction(transactions)},
    highestTransaction: ${getHighestTransaction(transactions)},
    lowestTransaction: ${getLowestTransaction(transactions)}`;
};

//showTransactions(transactions)
const showTransactions = (transactions) => {
  return transactions.forEach((tr) => {
    console.log(
      `${tr.id.padEnd(9, " ")}${tr.customer.padEnd(16, " ")}${formatTransactionDate(tr).padEnd(12, " ")}${tr.amount.toLocaleString("vi-VN").padEnd(13, " ")}${tr.status.padEnd(12, " ")}${calculateFinalAmount(tr).toLocaleString("vi-VN")}`,
    );
  });
};

//16.showTransactionReport(transactions)
const showTransactionReport = (transactions) => {
  if (transactions.length === 0) {
    console.log("Mảng rỗng");
    return;
  }
  console.log(`
  ========================================
          TRANSACTION MANAGEMENT
  ========================================

  TRANSACTION LIST

  ID       CUSTOMER       DATE        AMOUNT       STATUS      FINAL AMOUNT`);
  showTransactions(transactions);
  console.log(`
========================================
             STATISTICS
========================================
`);
  console.log(getTransactionStatistics(transactions));
  console.log(`
========================================
    `);
};

showTransactionReport(transactions);
