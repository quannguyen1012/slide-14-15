let ngoiSao = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let chomSao = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

let timSao = prompt("nhập tên sao: ");

function stars(timSao){
    let result = "";
    let idx = "";
    for ( let i = 0 ; i <= chomSao.length ; i++){
        for ( let j = 0 ; j <= ngoiSao.length ; j++){
            if ( timSao == ngoiSao[j]){
                idx = ngoiSao.indexOf(timSao);
                break;
            }
        }
        if ( idx == i){
            result = chomSao[i];
        }
    }
    return result;
}
document.write(stars(timSao));


