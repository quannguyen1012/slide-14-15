function addNumbers() {
    let firstNum = 4;
    let secondNum = 8;
    let result = firstNum + secondNum;
    return result;
}
result = 0;
alert("trước khi gọi hàm " + result);
result = addNumbers();
alert("sau khi gọi hàm" + result);
