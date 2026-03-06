function copyCode() {
    fetch("CONFIG/ASSETS/CODES/GAUGELINEAR.TXT")
        .then(response => response.text())
        .then(text => {
            navigator.clipboard.writeText(text);
            alert("Código copiado!");
        })
        .catch(error => {
            console.error("Erro:", error);
        });
}