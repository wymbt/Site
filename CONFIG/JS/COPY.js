function copyCode() {

fetch("CONFIG/ASSETS/CODES/GAUGELINEAR.TXT")

.then(response => response.text())
  
.then(text => {

document.getElementById("codeDisplay").textContent = text;

navigator.clipboard.writeText(text);

alert("CODE COPIED!");

})

.catch(error => {

console.error(error);

});

}
