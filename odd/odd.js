//odd

var x=prompt('enter the x value');

var y=prompt('enter the y value');
console.log(`the number between ${x}to${y} odd number is`);


for(let i=x;i<=y;i++){
    if(i%2!=0){
        console.log(i);
    }
}