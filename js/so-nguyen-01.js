let n = prompt('nhập số nguyên tố: ');

function isPrime(n) {
    let kT = true;
    if (n < 2) {
       return  kT = false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                kT = false;
                break;
            }
        }
        return kT;
    }
}
    let check = isPrime(n);

    if(check == true){
        document.getElementById('display').innerText = n + ' là số nguyên tố';
    }else {
        document.getElementById('display').innerText = n + " không phải là số nguyên tố";
    }

