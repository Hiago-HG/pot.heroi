function printMessage() {
    let heroName = document.getElementById('idName').value;
    let quantXp = parseInt(document.getElementById('quantXp').value);
    let heroClass = "";      

if (quantXp <= 1000) {
    heroClass = "Ferro";
} 

if (quantXp > 1000 && quantXp < 2001) {
    heroClass = "Bronze";
} 

if (quantXp > 2000 && quantXp < 6001) {
    heroClass = "Prata";
}

if (quantXp > 6000 && quantXp < 7001) {
    heroClass = "Ouro";
} 

if (quantXp > 7000 && quantXp < 8001) {
    heroClass = "Platina";
} 

if (quantXp > 8000 && quantXp < 9001) {
    heroClass = "Ascendente";
} 

if (quantXp > 9000 && quantXp < 10001) {
    heroClass = "Imortal";
} 

if (quantXp >= 10001) {
    heroClass = "Radiante";
} 

document.getElementById('result').innerHTML =


    `O Herói de nome ${heroName} está no nível de ${heroClass}</span>`;
}
