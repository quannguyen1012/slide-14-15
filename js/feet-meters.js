

let inputFoot = parseInt(prompt('nhâp foot'));
let inputMeters = parseInt(prompt('nhâp meters'));



//công thức chuyển đổi;
//   meter = 0.305 * foot
//       foot = 3.279 * meter

function footToMeters(foot){
    let a = 0.305;
    let product = a * Number(foot);
    return product;
}
document.write(inputFoot + " " + "foot = " + footToMeters(inputFoot) + "meters");
document.write("<br>");


function metersToFoot(meters){
    let b = 3.279;
    let product = b * meters;
    return product;
}
document.write(inputMeters + " " + "meter = " + metersToFoot(inputMeters) + "foot");

