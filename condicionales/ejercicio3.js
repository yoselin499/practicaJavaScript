let usuario =""
let retiro =""
let deposito =""

usuario = parseInt(
    prompt(
       "seleccione una de estas opciones:\n" +
       "1- Consultar Saldo\n" +
       "2- Retirar Dinero\n" +
       "3- Depositar Dinero\n" +
        "4- Salir"
    ).trim()
)
switch (true) {
    case (usuario === 1):
        document.write ("Su saldo es de:$"+Math.floor(Math.random()* 4000)  )
        break
        case(usuario === 2):
        retiro=parseInt(prompt("Cuanto desea retirar"))
        document.write("Retirando:$" + retiro + " De su cuenta")
      break
      case(usuario === 3):
    deposito =parseInt(prompt("Cuanto desea depositar"))
    document.write("Preparando el deposito de:$" + deposito)
   break
   case(usuario === 4):
   document.write("Gracias por usar el cajero,nos vemos!")
   break
   default:
   document.write("ingrese una opcion valida")
}

