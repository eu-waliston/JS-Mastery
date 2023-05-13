//Promise all

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

/*
const fetchData = async () => {
  //   try {
  // const c = await customers;
  // const a = await addresses;
  Promise.all([customers, addresses]).then((values) => {
    console.log(values);
  }).catch(err => {
    console.log(err);
  })
  //   } catch (error) {
  //     console.log(error);
  //   }
};
*/

const fetchData = async () => {
  try {
    const values = await Promise.all([customers, addresses]);
    const [c, a] = values;
    console.log(a);
    console.log(c);
  } catch (error) {
    console.log(error);
  }
};
fetchData();
