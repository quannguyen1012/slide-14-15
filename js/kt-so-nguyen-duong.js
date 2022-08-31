function KtSoNguyenDuong(n){
    let check = true;
    if(n>0){
        check = true;
    }else {
        check = false;
    }
    return check;
}
let n = prompt('nhập vào sô nguyên: ');
document.write(KtSoNguyenDuong(n));