function* test3() {
  const x = yield 1 + 1;
  const y = 3;
  console.log(x, y);
}

// 1) run the function using its name
//   test3()

// 2) This is an async function and returns a key for the generator (iterator)
var it = test3();

// 3) it.next() will move to the line which has yield or end of function

// while there it will execute the line and return its value as below
var first = it.next();
//with first={value: 2 done: false}

// 4) it.next(1). This will move the generator forward to the next yield or end of function.
//   In addition it leaves behind the argument (1 in this case)
var last = it.next(1);

// 5) no further stops and it reaches the end and logs 1, 3

var axios = require('axios');

//console.log(axios);

// function getUsers() {
//   var promise = axios.get('https://api.github.com/users');
//   promise.then(res => {
//     it.next(res);
//   });
// }

// function* logUsers() {
//   var res = yield getUsers();
//   console.log('users are', res.data);
// }

// var it = logUsers();
// it.next();

async function test4() {
  var res = await axios.get('https://api.github.com/users');
  console.log('users are', res.data);
}

test4();




