function copyCode() {

fetch("CONFIG/ASSETS/CODES/GAUGELINEAR.TXT")

.then(response => response.text())

.then(text => {

navigator.clipboard.writeText(text)

.then(() => {
alert("CODE COPIED!");
});

})

.catch(error => {

console.error("Erro:", error);
alert("ERROR!");

});

}
