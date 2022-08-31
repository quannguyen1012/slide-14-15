let n = prompt('nhâp độ dài của mạng; ');
let arr = new Array(n);
for(let i=0; i<n; i++){
    arr[i] = prompt("nhập vào các ký tự: ")
}
let count = 0;
let check;
function mangKyTu(kyTu){
    for(let i=0; i<=arr.length; i++){
        if(kyTu == arr[i]){
            check = true;
            count++;
        }else{
            check = false ;
        }
    }
    if(count < 1){
        alert(-1);
    }
    return "ky tu " + '"' + kyTu + '"' + " có trong mảng ="+ check + " " + " xuất hiện " + count + " lần ";
}

let kyTu = prompt('nhập vào ký tự cần tìm: ');

document.write("ký tự " + mangKyTu(kyTu) + "<br>");
