var i = 1;

while(i<=10){
    console.log('안녕');
    // i = i + 1;
    i++;
}


var a = 1;
while(a<=50){
    if(a%5===0){
        console.log(a);
    }
}


for(var j = 1; j <= 10; j++){
    console.log("안녕");
}

for(var k = 1; k<=50; k++){
    if(k%5===0){
        console.log(k);
    }
}


var arr = [5, 6, 7, 8];

// arr의 각 인덱스값을 대입함 ex) 0, 1, 2, 3
for(var index in arr){
    console.log(arr[index]);
}

// arr의 값 자체를 대입함 ex)5, 6, 7, 8
for(var item of arr){
    console.log(item);
}


var jsonArr = { email : "dummy", password : "a123"}

for(var key in jsonArr){
    console.log(jsonArr[key]);
}
