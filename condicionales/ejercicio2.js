let nota = "";

nota = parseInt(prompt("Ingrese su nota").trim());

switch (true) {
  case nota === 10:
    document.write("Excelente 10,Te Felicito!");
    break;
  case nota >= 8 && nota <= 9:
    document.write("Muy Bueno!");
    break;
  case nota >= 6 && nota <= 7:
    document.write("Bueno!");
    break;
  case nota >= 4 && nota <= 5:
    document.write("Desaprobado!");
    break;
  case nota >= 1 && nota <= 3:
    document.write("Desaprobado,a marzo:(");
    break;
  default:
    document.write("Ingrese una nota del 1 a 10");
}
