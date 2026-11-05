const makeGetUserRequest = async (id) => {
  const res = await fetch('http://localhost:3000/users');
  const result = await res.json();
  console.log('@@ result', result);
};

const makeGetUserRequestById = async (id) => {
  const res = await fetch(`http://localhost:3000/users/${id}`);
  const result = await res.json();
  console.log('@@ result', result);
};

const makePostUserRequest = async (name) => {
  const body = JSON.stringify({ name });
  const method = 'POST';
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch('http://localhost:3000/users', { body, method, headers });
  const result = await res.json();
  console.log('@@ result', result);
  return result;
};

const makeDeleteUserRequest = async (id) => {
  const method = 'DELETE';
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch(`http://localhost:3000/users/${id}`, { method, headers });
  const result = await res.status;
  console.log('@@ result', result);
};

const makePatchUserRequest = async (id, name) => {
  const method = 'PATCH';
  const headers = { 'Content-Type': 'application/json' };
  const body = JSON.stringify({ name });
  const res = await fetch(`http://localhost:3000/users/${id}`, {
    body,
    method,
    headers,
  });
  const result = await res.json();
  console.log('@@ result', result);
};

const makeUserRequest = async () => {
//   makeGetUserRequest();
//   makeGetUserRequestById('123');
//   makePostUserRequest('test_name');
//   makeDeleteUserRequest('456');
//   makePatchUserRequest('51d63d05-cc83-41ce-b034-21c2c4e7069d', 'Brad Pitt');
};

// makeUserRequest();

// -------------------------------------------------------------------------------------- Expenses ---------------------------------------------------------------------------------------------------------------------------------


const makePostExpenseRequest = async (name) => {

  const user = await makePostUserRequest(name);
  const method = 'POST';
  const headers = { 'Content-Type': 'application/json' };
  const expenseData = {
    userId: user.id,
    spentAt: '2022-10-19T11:01:43.462Z',
    title: 'Buy a new 444444444',
    amount: 999,
    category: 'Grocery',
    note: 'I need a new laptop',
  };

  try {
    const expenseRes = await fetch('http://localhost:3000/expenses', {
      body: JSON.stringify(expenseData),
      method,
      headers,
    });
    const resultExp = await expenseRes.json();
    console.log('@@ resultExp', resultExp);
  } catch (error) {
    console.log('@@ error', error);
  }
};

const makeGETExpenseRequest = async () => {
  try {
    const res = await fetch(`http://localhost:3000/expenses`);
    const expenses = await res.json();
    console.log('@@ resultExp', expenses);
  } catch (error) {
    console.log('@@ error', error);
  }
};

const makeGETExpenseRequestWithUserFilter = async (userId) => {
  try {
    const res = await fetch(`http://localhost:3000/expenses?userId=${userId}`);
    const expenses = await res.json();
    console.log('@@ resultExp', expenses);
  } catch (error) {
    console.log('@@ error', error);
  }
};

const makeGETExpenseRequestWithDateFilter = async () => {
  try {
    const res = await fetch(`http://localhost:3000/expenses?&from=2022-10-18T00:00:00.000Z&to=2022-10-18T23:59:59.999Z`);
    const expenses = await res.json();
    console.log('@@ resultExp', expenses);
  } catch (error) {
    console.log('@@ error', error);
  }
};

const makeGETExpenseRequestWithCategoryFilter = async (userId) => {
  try {
    const res = await fetch(`http://localhost:3000/expenses?userId=${userId}&categories=Electronics`);
    const expenses = await res.json();
    console.log('@@ resultExp', expenses);
  } catch (error) {
    console.log('@@ error', error);
  }
};

const makeGETExpenseRequestForSpecificExpense = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/expenses/${id}`);
    const expenses = await res.json();
    console.log('@@ resultExp', expenses);
  } catch (error) {
    console.log('@@ error', error);
  }
};

const makePATCHExpenseRequest = async (id) => {
  const method = 'PATCH';
  const headers = { 'Content-Type': 'application/json' };
  const body = JSON.stringify({ title: 'UPDATED' });
  const res = await fetch(`http://localhost:3000/expenses/${id}`, {
    body,
    method,
    headers,
  });
  const result = await res.json();
  console.log('@@ result', result);
};


const makeDELETExpenseRequest = async (id) => {
  const method = 'DELETE';
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch(`http://localhost:3000/expenses/${id}`, { method, headers });
  const result = await res.status;
  console.log('@@ result', result);
};



const makeExpenseRequest = async () => {
//   makePostExpenseRequest('Sem');
    makeGETExpenseRequest();
    // makeGETExpenseRequestWithUserFilter(1);
    // makeGETExpenseRequestWithDateFilter();
    // makeGETExpenseRequestWithCategoryFilter(1);
    // makeGETExpenseRequestForSpecificExpense(1);
    // makePATCHExpenseRequest(1);
    // makeDELETExpenseRequest(1);
};

makeExpenseRequest();

// console.log(Date.parse('2022-10-18T11:01:43.462Z'))
// const valFrom = 1666051200000;
// const valObrained = 1666090903462;
// const valTo = 1666137599999;

// console.log('@@@ result ====>',valObrained >= valFrom)
// console.log('@@@ result2 ====>',valObrained <= valTo)