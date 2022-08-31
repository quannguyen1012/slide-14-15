function oppositeNumber() {
    let input = document.getElementById('sDoi').value;
    increaseNum(input);
}

function increaseNum(number) {
    number++;
    document.write(number);
    return number;
}

