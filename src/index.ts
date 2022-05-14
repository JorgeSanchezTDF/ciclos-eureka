/* Estructura de control - Ciclos

Eureka

• Escribir un algoritmo que nos pida
una clave y verifique que sea la
correcta
• Tenga en cuenta que la clave es la
palabra “eureka”
• Solo tenemos 3 intentos para
acertar, si fallamos los 3 intentos
el sistema mostrará un mensaje
indicándonos que hemos agotado
todas las oportunidades
• Si acertamos la clave, saldremos
directamente del programa*/

let clave: string | null = prompt("Ingrese su clave");
let intentos: number = 0;

while (intentos < 3) {
  if (clave === "eureka") {
    console.log("Acceso permitido");
    break;
  } else {
    intentos++;
    clave = prompt("Ingrese su clave");
  }
}
