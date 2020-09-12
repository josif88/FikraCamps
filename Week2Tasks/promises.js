// -------------------- Q1 --------------------
function mySetTimeout(callback, miliseconds) {
  let alarm = Date.now() + miliseconds;

  while (Date.now() < alarm) {
    
  }
  callback("Ring");
}

//mySetTimeout((alarm) => console.log(alarm), 5000);

// -------------------- Q2 --------------------
// Solve this with callback
function getSalaryCB(callback) {
  setTimeout(() => {
    callback(1000);
  }, 1000);
}

function subTaxCB(salary, callback) {
  setTimeout(() => {
    callback(salary - salary * 0.2);
  }, 1000);
}

function subRentCB(salary, callback) {
  setTimeout(() => {
    callback(salary - 500);
  }, 1000);
}

function getIncomeCB(callback) {
  // send back the left amount of the money
  getSalaryCB((s) => {
    subTaxCB(s, (x) => {
      subRentCB(x, (y) => {
        callback(y);
      });
    });
  });
}

// call getIncomeCB
// getIncomeCB((s) => {  console.log(s);});

// -------------------- Q3 --------------------

// Solve this with Promises
function getSalaryP() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1000);
    }, 1000);
  });
}

function subTaxP(salary) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(salary - salary * 0.2);
    }, 1000);
  });
}

function subRentP(salary) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(salary - 500);
    }, 1000);
  });
}

function getIncomeP() {
  getSalaryP()
    .then(subTaxP)
    .then(subRentP)
    .then((s) => {
      console.log(s);
    });
  // send back the left amount of the money usign .then
}

async function getIncomeP2() {
  // send back the left amount of the money usign await
  let income = await getSalaryP().then(subTaxP).then(subRentP);
  console.log(income);
  return income;
}

async function getIncomePFor3Employees() {
  // send back the left amount of the money usign best way you can
  s1 = getIncomeP2();
  s2 = getIncomeP2();
  s3 = getIncomeP2();
  let [emp1, emp2, emp3] = await Promise.all([s1, s2, s3]);
  console.log(emp1, emp2, emp3);
}

// you call the functions
// getIncomeP();
// getIncomeP2();
// getIncomePFor3Employees();
