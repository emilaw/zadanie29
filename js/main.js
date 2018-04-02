var liczbaPierwsza = 5;
var liczbaDruga = 4;

function myFunction(liczbaPierwsza, liczbaDruga) {
    var suma = liczbaPierwsza + liczbaDruga;
    return suma;
}
document.getElementById("dodawanie").innerHTML = myFunction(liczbaPierwsza, liczbaDruga);
