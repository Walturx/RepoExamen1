function getTemp(){
    const F = parseInt(document.getElementById("F").value);
    const C = (F-32)*5/9
    alert("La temperatura calculada es "+C.toFixed(2)+"°C.")
}