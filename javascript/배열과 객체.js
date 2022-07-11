// 배열 create
const arr = [1, 2, 3, 4];

// 배열 read
arr[0];
console.log(arr[3]);

arr.slice(1, 2);

console.log(arr.slice(1, 3));

// 배열 update
arr[0]=100;

console.log(arr);

// 배열 delete

// 0번째 노드부터 1개까지 지움
arr.splice(0, 1);

console.log(arr);


// 배열 연습문제

const nameList = ["짱구", "철수"];

console.log(nameList);

nameList.push("훈이");

console.log(nameList);

nameList[1] = "유리";

nameList.splice(0, 1);

console.log(nameList);


// 객체

// 객체 create
// key : value
let userInfo = {
    email : "dummy@dummy.com",
    password : "a1234"
}

// 객체 read
userInfo.email;
userInfo["email"];

// 객체 update
userInfo.email = "updated";

// 객체 delete
delete userInfo.email;