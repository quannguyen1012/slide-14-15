function giaiThua(n){
    let product = 1;
    for(let i=2; i<=n; i++){
        product *= i;
    }
    return product;
}
let n = parseInt(prompt('nhập số bất kỳ: '));
document.write("giai thừa của số nhập vào là: "+giaiThua(n));
