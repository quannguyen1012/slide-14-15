function kTKyTu(kTuInput){
    let check = true;
    if(kTuInput%1==0){
        check = true;
    }else{
        check = false;
    }
    return check;
}
let kTuInput = prompt("nhập vào ký tự (sô hoắc chữ): ");
document.write(kTKyTu(kTuInput));