//Async Await

const customers = new Promise((resolve, reject) => {
  return Promise.resolve().then(() => {
    let i = 0;
    while (i < 2_000_000_00) i++;
    resolve([
      { name: "Wal", id: 1 },
      { name: "Wizard", id: 2 },
    ]);
  });
});

const addresses = new Promise((resolve, reject) => {
  return Promise.resolve().then(() => {
    let i = 0;
    while (i < 2_000_000_00) i++;
    resolve([
      { customerId: 1, addresse: "London" },
      { customerId: 2, addresse: "USA" },
    ]);
  });
});

// const fetchData = () => {
//   customers
//     .then((c) => {
//       addresses
//         .then((a) => {
//           console.log(c);
//           console.log(a);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const fetchData = async () => {
  try {
    const c = await customers;
    const a = await addresses;

    console.table(c);
    console.table(a);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
