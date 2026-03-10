function copyCode() {

fetch("config/assets/codes/rankinglinear.txt")

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

fetch("config/assets/codes/rankingbarras.txt")

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

fetch("config/assets/codes/linhas.txt")

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

fetch("config/assets/codes/gaugelinear.txt")

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

fetch("config/assets/codes/barras.txt")

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

fetch("config/assets/codes/rankinglista.txt")

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
