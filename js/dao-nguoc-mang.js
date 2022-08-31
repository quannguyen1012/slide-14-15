let n = parseInt(prompt('nhâp độ dài của mạng; '))
let arr = new Array(n);
for(let i=0; i<n; i++){
    arr[i] = +prompt("nhap vào số nguyên: ")
}
let temp = "";
let j = arr.length-1;
 function reverse(arr){
    for(let i=0; i<arr.length; i++) {
        if (i < j) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    return arr;
 }
 document.write("Array: [" + arr + "]" + "<br>");
document.write("Reverse Array: [" + reverse(arr) + "]");

