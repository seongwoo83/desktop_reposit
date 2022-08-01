// 1 ~ 10 더하기

let sum = 0

for(let i = 1; i<=10; i++){
    sum = sum + i;
}

console.log(sum);

// 1 ~ 20 더하기

let sum = 0

for(let i = 1; i<=20; i++){
    sum = sum + i;
}

// start ~ target까지 더하기
// 기본함수는 호스팅을 지원해서 어느위치에서도 불러올 수 있음
function sum1(start, target){
    let result = 0;
    for(let i = start; i <= target; i++){
        result = result + i;
    }
    return result;
}

// 익명함수는 반드시 정의된 다음에 호스팅이 가능함.
const sum2 = (start, target) => { //es6방식
    let result = 0;
    for(let i = start; i <= target; i++){
        result = result + i;
    }
    return result;
}

console.log(sum(1, 10));
console.log(sum(2, 100));
console.log(sum(10, 1000));




// BMI지수 계산하는 함수 만들기

const BMI = (height, weight) =>{
    const meterHeight = height/100;
    const result = weight / (meterHeight * meterHeight);

    return result;
}