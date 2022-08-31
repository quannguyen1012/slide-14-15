let pi = 3.14;
function area(r){
    let S = r*r*pi;
    return S;
}
function perimeter(d){
    let C = d*pi;
    return C;
}
let d = parseInt(prompt('nhập đường kính hình tròn: '));
let r = d/2;
document.write("điện tích hình tròn: "+area(r));
document.write("<br>");
document.write("chu vi hình tròn: "+perimeter(d));