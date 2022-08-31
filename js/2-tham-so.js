function oppositeNumber(a, b) {
    if(a>b){
        return (a + " lớn hơn " + b);
    }
    if(a<=b) {
        let sum = a + b;
        return "tổng: "+sum;
    }
}

let a = prompt("nhập a: ");
let b = prompt("nhập b: ");
alert(oppositeNumber(a, b));