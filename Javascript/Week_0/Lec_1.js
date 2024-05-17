// Function
// Most Imp is Arrow (=>) function

// function enrol(nam1, nam2) {
//   let nam3 = nam1 + nam2;
//   return nam3;
// }

// let nam4 = ioi("pw", "ioi", "xyz");
// console.log(nam4);

// Function with n no. of par

// function sum(num) {
//   sum = 0;
//   for (let i = 0; i < 5; i++) {
//     sum = sum + num[i];
//   }
//   return sum;
// }
// num = [1, 2, 3, 4, 5];
// const total = sum(num);
// console.log(total);

// arguments

// function sum() {
//   sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i];
//   }
//   return sum;
// }

// const total = sum(1, 2, 3, 4, 5);
// console.log(total);

// Arroy Function

// let name = () => {
//   console.log("Nishchay");
// };

// name();

// let name = function (x,y,z,){}
// let name = () =>{}

// let sum = (a, b) => a + b;
// console.log(sum(10, 20));

// console.log("This is `${a}` ");

// Object

let stud1 = {
  rollno: 120,
  name: "Harsh",
  mobno: 9999999999,
  //   sub: ["aurag", "bunty", "chandu", "deepak"],

  ioi: function () {
    return `${this.mobno}`;
  },
};

console.log(stud1.ioi());
