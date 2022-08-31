
function square(n){
    let num = Math.pow(n,2);
    return num;
}
let n = parseInt(prompt('nhập vào 1 số bất kỳ: '));
document.write("bình phương của số vừa nhập vào là: " + square(n));