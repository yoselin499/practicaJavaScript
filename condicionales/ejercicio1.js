let bateria = parseInt(prompt("Ingrese el porcentaje de bateria de 1 a 100"));

if (bateria >= 101) {
  document.write("Ingrese un valor valido entre 0 y 100");
} else if (bateria >= 80) {
  document.write("Bateria llena.");
} else if (bateria >= 30) {
  document.write("Bateria media.");
} else if (bateria >= 0) {
  document.write("Bateria baja.");
} else {
  document.write("Ingrese un valor valido entre 0 y 100");
}
