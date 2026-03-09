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

function copyCode2() {

fetch("CONFIG/ASSETS/CODES/RANKINGLINEAR.TXT")

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

function copyCode3() {

fetch("CONFIG/ASSETS/CODES/RANKINGLISTA.TXT")

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

function copyCode4() {

fetch("CONFIG/ASSETS/CODES/BARRAS.TXT")

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

function copyCode5() {

fetch("CONFIG/ASSETS/CODES/RANKINGBARRAS.TXT")

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

function copyCode6() {

fetch("CONFIG/ASSETS/CODES/LINHAS.TXT")

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
