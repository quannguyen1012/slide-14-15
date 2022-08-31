function nhanVao(a, b, c){
    let result;
    let min = a;
    if(min > b){
        min = b;
    }
    if(min > c){
        min = c;
    }

    return min;
}
let a = prompt('nhâp số a: ');
let b = prompt('nhâp số b: ');
let c = prompt('nhâp số c: ');
document.write("so nguyên có giá trị nhở nhất là: " +  nhanVao(a, b, c));