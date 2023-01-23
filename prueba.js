//CLASE 1

//Comentario Simple: Una linea

/* Comentario de mas de una linea I
   Comentario de mas de una linea II */ 

   //Declaracion de variable ES5

   //var nombre = "Luciano";

   //Declaracion de variable ES6

    /*let apellido = "Villar";
    const Nacionalidad  = "Uruguay";*/

// correcto

/*let apodo 
let telefono
const anioNacimiento*/

// incorrecto

/*var año
var telefono movil */

/*EJERCICIOS

//Declaracion
const nombre = "Luciano";
const apellido = "Villar";
let edad = 22 ; //number
let edad2 = "22" //string
//Asignacion
edad = 23;
edad2 = "21";

//OPERACIONES BASICAS
let numeroa = 2;
let numerob = 5;
const numeroc = 4;

//suma 
let resultadosuma = numeroa + numerob;
//resta
let resultadoresta = numerob - numeroa;
//multiplicacion
let resultadoproducto = numerob * numeroc;
//division
let resultadodivision = numeroc / numeroa;

let texto1 = "Coder";
let texto2 = "House";
const BLANCO = "";

//Concatenar texto1 y texto2 ("Coder" y "House" = CoderHouse)
let resultadoA = texto1 + texto2;
//Concatenar texto2 y 1 ("House" + 1 = House1)
let resultadoB = texto2 + 1;
//Concatenar texto1, BLANCO y texto2 ("Coder" + "" + "House")
let resultadoC = texto1 + BLANCO + texto2;

//Para poder ver resultados en la consola:

console.log(resultadoC);
console.log(resultadodivision);
console.log(resultadoB);
console.log(apellido);

console.log("Naci en el 2000, es decir que mi edad es:" + edad + " años");

//PROMPT
const nombreIngresado = prompt("Ingrese su nombre");
const apellidoIngresado = prompt("Ingrese su apellido");
alert("Hola querido " + nombreIngresado + BLANCO + apellidoIngresado + " ,Tenemos nuevos productos!!!");


console.log(nombreIngresado);
console.log(apellidoIngresado);*/

//ejercicio 1

/*let bienvenido = prompt("Ingrese su nombre");

console.log("Bienvenido de nuevo " + bienvenido + ", Todos los de la tienda nos preguntabamos por ti.");
*/
//ejercicio 2
/*
let nombre = prompt("Como te llamas?");
let apellido = prompt("Y como es tu apellido?");
alert("Hola " + nombre + " " + apellido + ", te echabamos de menos, en que te podemos ayudar hoy?");
*/
//ejercicio 3
/*let edad = parseInt(prompt("Ingrese edad"));
alert("Hola estimado cliente, su edad a la fecha es " + edad + " años");
const edadCami = 21;
let diferenciaEdad = edad - edadCami
console.log("La edad de diferencia de nosotros es de " + diferenciaEdad + " años");
*/

//CLASE 2

/*if (true) {
 console.log(" vas a ver este mensaje")
};*/

/*if (false) {
    console.log(" no vas a ver este mensaje ")
};

console.log("este mensaje lo vemos siempre");

const usuario = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");
let edad = parseInt(prompt("Ingrese su edad"));

console.log("Bienvenido " + usuario + " estamos encantados de volver a verte.");
console.log( apellido + " en que lo podemos ayudar hoy?");
console.log("Su edad es " + edad);

//EJEMPLO DE CONDICIONALES
let edad = 22;

if (edad == 22){
console.log("Tu edad es 22 años")
};

if (edad == 20){
console.log("Tu edad no es 22 años")
};

let edad = 22;
if (edad == 22){
console.log("Tenes la misma edad que el programador")
}else{
console.log("Tenes una edad distinta a la del programador")
};*/

//EJEMPLO de if ... else

/*let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario == "") {
alert("No ingresaste el nombre de usuario");
}
else {
alert("El nombre del usuario ingresado es " + nombreUsuario);
}*/

//CONDICIONALES ANIDADAS if ... else if

/*let precio = 100.5;
if (precio < 20) {
alert("El precio es menor que 20");
}
else if (precio < 50) {
alert("El precio es menor que 50");
}
else if (precio < 100) {
alert("El precio es menor que 100");
}
else {
alert("El precio es mayor que 100");
}*/

 //TRUE or FALSE
/*
let numero = parseInt(prompt("Elegir numero"))
let esMayor5 = (numero > 5);//su valor sera true

if (esMayor5) {
alert("Es boolean true")
}
else {
alert("Es boolean false")
};

 //OPERADOR EN JS (&& o AND)

let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")) {
alert("Nombre: " + nombreIngresado + " --- Apellido: " + apellidoIngresado);
}else{
alert("Error: Ingresar nombre y apellido");
}*/

 //OPERADOR EN JS ( || o OR)

/*let nombreIngresado = prompt("Ingresar nombre");

if((nombreIngresado == "ANA") || (nombreIngresado == "ana") || (nombreIngresado == "Ana")){
    alert("El nombre es Ana");
}else{
    alert("El nombre no es Ana");
}*/

//COMBINACION || (OR) Y && (AND)
/*let nombreIngresado = prompt("Ingresar  nombre");

if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
    alert("Hola Ema");
}else{
    alert("Error: Ingresar nombre valido");
}*/

//ALGORITMO CREADO POR MI

/*
const  usuario = prompt("Ingrese su usuario");
const apellido = prompt("Ingrese su apellido");

if ((usuario !="") && (apellido !="")){
    alert("Bienvenido querido " + usuario + " " + apellido + " recordarte que esta pagian es exclusiva para mayores de 18 años, ¿Cumples con ese requisito?")
}else{
    alert("Error: Ingresar nombre y apellido");
}

let edad = parseInt(prompt("Ingresar su edad"));

if((edad !="") && ((edad == 18) || (edad >= 18))){
    alert("Excelente, Ahora es hora de disfrutar de nuestros productos");
}else{
    alert("No cumples con la edad minima para poder acceder a esta pagina");
}

console.log("El nombre del Usuario es " + usuario);
console.log("El apellido del Usuario es " + apellido);
console.log("La edad es " + edad);


for(i = 0; i < 8; i = i + 1){
    console.log("Ahora la variable es igual a " + i)
}

console.log("Termino el conteo de variable.")
;
*/

//Ciclo FOR
/*
for(let i = 1; i <= 5; i = i + 1) {

    const nombre = prompt("Introducir nombre");
    let edad = parseInt(prompt("Introducir edad"));

    alert("El Usuario es " + i + " que hace referencia a " + nombre + " que tiene la edad de " + edad + " años" )
}
*/

//CICLO FOR CON BREAK
/*
for(let i = 1; i <= 5; i = i + 1) {

    const nombre = prompt("Introducir nombre");
    let edad = parseInt(prompt("Introducir edad"));

if (edad < 18) {
    alert("Se ingreso una edad menor a 18.")
    break;
}
alert("El Usuario es " + i + " que hace referencia a " + nombre + " que tiene la edad de " + edad + " años" )
};
*/

//CICLO FOR con CONTINUE
/*
for (let i = 1; i <= 5; i = i + 1) {

const nombre = prompt("Nombre");
let edad = parseInt(prompt("Edad"));

if (edad < 18) {
    alert("Tu edad no es valida para la pagina");
    continue;
}
alert("El Usuario es " + i + " que hace referencia a " + nombre + " que tiene la edad de " + edad + " años" )
};

console.log(nombre);

//Me quede en el minuto 35:18

 */
/*
const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");

if((nombre != "") && (apellido != "")) {
    alert("Bienvenido a LifeGame " + nombre + " " + apellido + " ,esperamos puedas disfrutar de algunos de los titulos que tenemos!")
} else{
    alert("Introducir nombre/apellido valido")
};

*/
/*
const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");

if((nombre != "") && (apellido != "")) {
    alert("Bienvenido a LifeGame " + nombre + " " + apellido + " ,esperamos puedas disfrutar de algunos de los titulos que tenemos!")
} else{
    alert("Introducir nombre/apellido valido")
};

*/


/*
    let marcarOpcion = true;
    while(marcarOpcion) {

    let mensajeOpciones = "Bienvenida al selector de opciones de LifeGame, a continuacion tendras varias opciones para poder disfrutar de nuestro contenido."

        mensajeOpciones += "\n 1) Agregar nuevo juego para la pagina.";
        mensajeOpciones += "\n 2) Propuesta para dar de baja la venta de un juego.";
        mensajeOpciones += "\n 3) Calcular monto de juego con descuento elegido.";
        mensajeOpciones += "\n 4) Salir.";

    let respuestaOpciones = prompt(mensajeOpciones);

        switch (respuestaOpciones) {
            case "1" :
                agregarJuego();
            break;
            case "2" :
                quitarJuego();
            break;
            case "3" :
                montoFinal();
            break;
            case "4" :
                alert("Gracias por visitar LifeGame!");
                marcarOpcion=false;
                break;
            case "null" :
                alert("Gracias por visitar LifeGame!");
                marcarOpcion=false;
                break;
            default :
                alert("Usted no ingresó ninguna opcion, por favor seleccionar una opcion.")

        }
    } 
    
    function agregarJuego() { 

    let nombreJuego = prompt("Ingrese nombre del juego.");
    let preciojuego = parseInt(prompt("Ingrese valor del juego."));

    if((nombreJuego !="") && (preciojuego !="")){
        alert("El nombre y el precio recomendados, fueron ingresados con exito, gracias por colaborar para que LifeGame.");
    }else{
        alert("Error: Ingresar nombre y precio");
    }
};

    function quitarJuego() {

    let quitarJuego = prompt("Ingrese el nombre del juego que propone quitar de la venta.");
    let descripcionJuego = prompt("Describe el motivo por el cual quieres que quitemos ( " + quitarJuego + " ) de LifeGame.");

    if(quitarJuego ==""){
        alert("Debes agregar el nombre del juego que quieres que quitemos.");
    } else if(descripcionJuego ==""){
        alert("Explicanos el motivo por el cual quieres que quitemos el titulo.");
    } else{
        alert("Esperamos poder satisfacer tus peticiones para que sigas eligiendo LifeGame!");
    }
    };



function montoFinal() {

    let montoArticulo = parseInt(prompt("Ingrese monto de articulo"));
    let elegirDescuento= parseInt(prompt("Ingresar si su decuento debe ser 5, 10 o 15%"));
    let montoDescuento = montoArticulo / 100 * elegirDescuento;

    switch(elegirDescuento) {
        case 5 :
            alert("El total a pagar por el usuario es " + ( montoArticulo - montoDescuento ) + " pesos.");
            break;
        case 10 :
            alert("El total a pagar por el usuario es " + ( montoArticulo - montoDescuento ) + " pesos.");
            break;
        case 15 :
            alert("El total a pagar por el usuario es " + ( montoArticulo - montoDescuento ) + " pesos.");
            break;
        case "null":
           alert("No ingresaste ningun descuento valido.")
        default:
            alert("No existe dicho monto de descuento") ;         
    }; 
}

*/

/*
function Juego(nombre, categoria, descripcion, precio) {

this.nombre = nombre;
this.categoria = categoria;
this.descripcion = descripcion;
this.precio = precio;

this.presentacion = function() {
    console.log("El nombre del juego es: " + this.nombre + " ,su categoria es " + this.categoria + " y tiene un valor de " + this.precio );
}
}



const juego1 = new Juego( "Counter Strike Clobal Offensive", "FPS", "Counter-Strike: Global Offensive (CS:GO) amplía el juego de acción por equipos del que fue pionero cuando salió hace más de 20 años. CS:GO incluye nuevos mapas, personajes, armas y modos de juego, y ofrece versiones actualizadas del contenido clásico de Counter-Strike (de_dust2, etc.).", "Free to Play.") ;

const juego2 = new Juego("League of Legends", "MOBA", "League of Legends es un juego de estrategia por equipos en el que dos equipos de cinco campeones se enfrentan para ver quién destruye antes la base del otro. Elige de entre un elenco de 140 campeones para realizar jugadas épicas, asesinar rivales y derribar torretas para alzarte con la victoria.", "Free to Play");

juego1.presentacion();
juego2.presentacion();

*/
//for - in 
/*
if("imagen" in juego1) {
    console.log("El articulo tiene la propiedad.");
} else {
    console.log("El juego no tiene la propiedad.")
}

*/
/*
for(const propiedad in juego2){
    console.log(propiedad)
};
*/
/*
function Juego(nombre, categoria, descripcion, precio) {

    this.nombre = nombre;
    this.categoria = categoria;
    this.descripcion = descripcion;
    this.precio = precio;
}
   */ 
/*
    class Juego {

        constructor(nombre, categoria, descripcion, precio) {

            this.nombre = nombre;
            this.categoria = categoria;
            this.descripcion = descripcion;
            this.precio = precio;

        }
    propiedad () {
console.log("El nombre del articulo es: " + this.nombre + " ,la categoria del juego es: " + this.categoria + " y la descripcion es: " + this.descripcion);
 }
}
    

    const juego1 = new Juego("Counter Strike Clobal Offensive", "FPS", "Counter-Strike: Global Offensive (CS:GO) amplía el juego de acción por equipos del que fue pionero cuando salió hace más de 20 años. CS:GO incluye nuevos mapas, personajes, armas y modos de juego, y ofrece versiones actualizadas del contenido clásico de Counter-Strike (de_dust2, etc.).", 0) ;
    const juego2 = new Juego("League of Legends", "Estategia", "League of Legends es un juego de estrategia por equipos en el que dos equipos de cinco campeones se enfrentan para ver quién destruye antes la base del otro. Elige de entre un elenco de 140 campeones para realizar jugadas épicas, asesinar rivales y derribar torretas para alzarte con la victoria.", 0);
    const juego3 = new Juego("Age of Empires II", "Estrategia", "Age of Empires II: Definitive Edition incluye Los últimos khanes, que incorpora 3 campañas y 4 civilizaciones nuevas. Las frecuentes actualizaciones contienen eventos, contenido adicional, nuevos modos de juego (¡como el reciente modo cooperativo!) y funciones mejoradas.", 105);
    const juego4 = new Juego("FIFA 23", "Deportes", "Vive la emoción del mayor torneo futbolístico con EA SPORTS™ FIFA 23 y la actualización de la FIFA World Cup™ masculina, ¡disponible el 9 de noviembre sin coste adicional!", 1200);
    const juego5 = new Juego("F1 22", "Deportes", "Entra en la nueva era de la Formula 1® en EA SPORTS™ F1® 22, el videojuego oficial de FIA Formula One World Championship™ 2022", 1040);
    const juego6 = new Juego("NewWorld", "MMORPG", "Explora un emocionante MMO de mundo abierto repleto de peligros y oportunidades en el que forjarás un nuevo destino en la isla sobrenatural de Aetérnum.", 399);
    const juego7 = new Juego("Project Zomboid", "Supervivencia", "Project Zomboid is the ultimate in zombie survival. Alone or in MP: you loot, build, craft, fight, farm and fish in a struggle to survive. A hardcore RPG skillset, a vast map, massively customisable sandbox and a cute tutorial raccoon await the unwary. So how will you die? All it takes is a bite..", 287);
    const juego8 = new Juego("Grounded", "Supervivencia", "The world is a vast, beautiful and dangerous place – especially when you have been shrunk to the size of an ant. Can you thrive alongside the hordes of giant insects, fighting to survive the perils of the backyard?", 535);
    const juego9 = new Juego("NBA 2k23", "Deportes", "Ponte a la altura de las circunstancias en NBA 2K23. Demuestra tu talento en Mi CARRERA. Empareja a All-Stars con leyendas eternas en MyTEAM. Construye tu propia dinastía en Mi GM, o guía a la NBA en una nueva dirección con Mi LIGA. Enfréntate a equipos de la NBA o de la WNBA en JUGAR AHORA y siente el juego real.", 874);
    const juego10 = new Juego("Valorant", "FPS", "Valorant es un juego de disparos tácticos que involucra a dos equipos con 5 jugadores en cada equipo. Todos los jugadores pueden iniciar sesión y jugar de forma remota desde cualquier parte del mundo. Cada juego tiene 25 rondas y el equipo que gana 13 de ellos primero gana el juego. Los jugadores pueden elegir sus personajes en el juego llamados agentes al comienzo del juego.", 0);
    const juego11 = new Juego("Among Us", "Multijugador", "Un juego de socialización local o en línea de trabajo en equipo y traición para 4 a 15 jugadores... ¡ambientado en el espacio!", 84);
    const juego12 = new Juego("Dying Light 2 Stay Human", "Zombis", "El virus ha ganado y la civilización ha vuelto a la Edad Oscura. La Ciudad, uno de los últimos asentamientos de la humanidad, está al borde del abismo. Con tu agilidad y tu maestría del combate, deberás sobrevivir y dar forma al mundo. Tus decisiones importan.", 999);
    const juego13 = new Juego("Elden Ring", "Rol", "EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.", 1540);
    const juego14 = new Juego("Red Dead Redemtion II", "Aventura", "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por toda América en el albor de una nueva era. También incluye acceso al mundo multijugador compartido de Red Dead Online.", 527);
    const juego15 = new Juego("Hogwarts Legacy (Pre-compra)", "Aventura", "Hogwarts Legacy es un RPG inmersivo de acción en mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico.", 1899);
    const juego16 = new Juego("Sea of Thieves", "Aventura", "Sea of Thieves ofrece la experiencia de piratasdefinitiva, desde la navegación y elcombate hasta la exploración y elsaqueo: todo para disfrutar de la vidapirata y convertirteenleyenda. No hay funcionesestablecidas, tienes total libertad para enfrentarte al mundo y a los demásjugadorescomodesees.", 399);
    const juego17 = new Juego("Destiny 2", "FPS", "Destiny 2 es un MMO de acción con un mundo único y dinámico al que tus amigos y tú os podéis unir en cualquier momento y desde cualquier lugar de forma totalmente gratuita.", 0);
    const juego18 = new Juego("Stray", "Aventura", "Perdido, solo y separado de su familia, un gato callejero debe desentrañar un antiguo misterio para escapar de una ciberciudad olvidada y encontrar el camino a casa.", 519)



    juego1.propiedad();
    juego2.propiedad();
    juego13.propiedad()

    //Me quede en 01:33:40

    */
    /*
    //Los arrays se definen con []

    const array1 = [];
    const array2 = [1, 2, 3];

    //Acceso a los arrays

//Arrays numeros

    const numeros = [0,1,2,3,4,5];
    console.log(numeros[2]);
    console.log(numeros[4]);
    let resultado = numeros[2] + numeros[4];
    console.log("El resultado de la suma es " + resultado);
*/
/*
//Arrays string

    const nombres = ["Luciano","Rodrigo","Camila","Julio","Bettiana"];
    console.log(nombres);
/*
//Obtener indice dinamicamente
    const indice = parseInt(prompt("Ingrese un indice."));
    console.log(nombres[indice]);

//recorrer array
for(let i = 0 ; i < 6; i++) {

    console.log(nombres[i]);

}


//recorrer array con length
for(let i = 0; i < nombres.length; i++) {

console.log(nombres[i])

;} 


//Agregar elemento(push)

nombres.push("Braulio");

console.log(nombres.length);
console.log(nombres);

//Quitar elemento()
*/
/*
let total = 0;
for(let i = 1; i <= 10; i++){

total +=i

}

console.log(total);
*/
/*
function calculardescuentillo(porcentaje){
    return(precio) => (porcentaje * precio) / 100;
}

const silver = calculardescuentillo(5);
const gold = calculardescuentillo(10);
const platinum = calculardescuentillo(15);
const black = calculardescuentillo(20);
const lifehack = calculardescuentillo(50);

const precio = parseInt(prompt("Ingrese valor del Juego"));

*/

/*

class Juego {

    constructor(nombre, categoria, descripcion, precio) {

        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.precio = precio;

    }
propiedad() {
alert("El Juego es: " + this.nombre + " , y la descripcion es: " + this.descripcion);
}
}


const videojuegos = [];
const juego1 = new Juego("Counter Strike Global Offensive", "FPS", "Counter-Strike: Global Offensive (CS:GO) amplía el juego de acción por equipos del que fue pionero cuando salió hace más de 20 años. CS:GO incluye nuevos mapas, personajes, armas y modos de juego, y ofrece versiones actualizadas del contenido clásico de Counter-Strike (de_dust2, etc.).", 0) ;
const juego2 = new Juego("League of Legends", "Estrategia", "League of Legends es un juego de estrategia por equipos en el que dos equipos de cinco campeones se enfrentan para ver quién destruye antes la base del otro. Elige de entre un elenco de 140 campeones para realizar jugadas épicas, asesinar rivales y derribar torretas para alzarte con la victoria.", 0);
const juego3 = new Juego("Age of Empires II", "Estrategia", "Age of Empires II: Definitive Edition incluye Los últimos khanes, que incorpora 3 campañas y 4 civilizaciones nuevas. Las frecuentes actualizaciones contienen eventos, contenido adicional, nuevos modos de juego (¡como el reciente modo cooperativo!) y funciones mejoradas.", 105);
const juego4 = new Juego("FIFA 23", "Deportes", "Vive la emoción del mayor torneo futbolístico con EA SPORTS™ FIFA 23 y la actualización de la FIFA World Cup™ masculina, ¡disponible el 9 de noviembre sin coste adicional!", 1200);
const juego5 = new Juego("F1 22", "Deportes", "Entra en la nueva era de la Formula 1® en EA SPORTS™ F1® 22, el videojuego oficial de FIA Formula One World Championship™ 2022", 1040);
const juego6 = new Juego("New World", "Aventura", "Explora un emocionante MMO de mundo abierto repleto de peligros y oportunidades en el que forjarás un nuevo destino en la isla sobrenatural de Aetérnum.", 399);
const juego7 = new Juego("Project Zomboid", "Supervivencia", "Project Zomboid is the ultimate in zombie survival. Alone or in MP: you loot, build, craft, fight, farm and fish in a struggle to survive. A hardcore RPG skillset, a vast map, massively customisable sandbox and a cute tutorial raccoon await the unwary. So how will you die? All it takes is a bite..", 287);
const juego8 = new Juego("Grounded", "Supervivencia", "The world is a vast, beautiful and dangerous place especially when you have been shrunk to the size of an ant. Can you thrive alongside the hordes of giant insects, fighting to survive the perils of the backyard?", 535);
const juego9 = new Juego("NBA 2k23", "Deportes", "Ponte a la altura de las circunstancias en NBA 2K23. Demuestra tu talento en Mi CARRERA. Empareja a All-Stars con leyendas eternas en MyTEAM. Construye tu propia dinastía en Mi GM, o guía a la NBA en una nueva dirección con Mi LIGA. Enfréntate a equipos de la NBA o de la WNBA en JUGAR AHORA y siente el juego real.", 874);
const juego10 = new Juego("Valorant", "FPS", "Valorant es un juego de disparos tácticos que involucra a dos equipos con 5 jugadores en cada equipo. Todos los jugadores pueden iniciar sesión y jugar de forma remota desde cualquier parte del mundo. Cada juego tiene 25 rondas y el equipo que gana 13 de ellos primero gana el juego. Los jugadores pueden elegir sus personajes en el juego llamados agentes al comienzo del juego.", 0);
const juego11 = new Juego("Among Us", "Estrategia", "Un juego de socialización local o en línea de trabajo en equipo y traición para 4 a 15 jugadores... ¡ambientado en el espacio!", 84);
const juego12 = new Juego("Dying Light 2 Stay Human", "Supervivencia", "El virus ha ganado y la civilización ha vuelto a la Edad Oscura. La Ciudad, uno de los últimos asentamientos de la humanidad, está al borde del abismo. Con tu agilidad y tu maestría del combate, deberás sobrevivir y dar forma al mundo. Tus decisiones importan.", 999);
const juego13 = new Juego("Elden Ring", "Aventura", "EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.", 1540);
const juego14 = new Juego("Red Dead Redemtion II", "Aventura", "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por toda América en el albor de una nueva era. También incluye acceso al mundo multijugador compartido de Red Dead Online.", 527);
const juego15 = new Juego("Hogwarts Legacy", "Aventura", "Hogwarts Legacy es un RPG inmersivo de acción en mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico.", 1899);
const juego16 = new Juego("Sea of Thieves", "Aventura", "Sea of Thieves ofrece la experiencia de piratasdefinitiva, desde la navegación y elcombate hasta la exploración y elsaqueo: todo para disfrutar de la vidapirata y convertirteenleyenda. No hay funcionesestablecidas, tienes total libertad para enfrentarte al mundo y a los demásjugadorescomodesees.", 399);
const juego17 = new Juego("Destiny 2", "FPS", "Destiny 2 es un MMO de acción con un mundo único y dinámico al que tus amigos y tú os podéis unir en cualquier momento y desde cualquier lugar de forma totalmente gratuita.", 0);
const juego18 = new Juego("Stray", "Aventura", "Perdido, solo y separado de su familia, un gato callejero debe desentrañar un antiguo misterio para escapar de una ciberciudad olvidada y encontrar el camino a casa.", 519)

videojuegos.push(juego1, juego2, juego3, juego4, juego5, juego6, juego7, juego8, juego9, juego10, juego11, juego12, juego13, juego14, juego15, juego16, juego17, juego18);

// MAP
/*
const precioVideojuegos = videojuegos.map( ( Juego ) => {
    return {
        nombre: Juego.nombre,
        precio: Juego.precio,
    };
} ) ;

console.log(precioVideojuegos);
*/
// Reduce
/*
const totalapagar = videojuegos.reduce( (acc, Juego) => {

return acc + Juego.precio;

}, 0);

console.log(totalapagar);

*/
/*
//FILTER
function filtrarporCategoria() {


const videojuegosFPS = videojuegos.filter( (videojuegos) => videojuegos.categoria === "FPS");
alert("First-Personal Shooter: \n"+devolverNombres(videojuegosFPS).join('\n'));

const videojuegosEstrategia = videojuegos.filter( (videojuegos) => videojuegos.categoria === "Estrategia");
alert("Estrategia: \n"+devolverNombres(videojuegosEstrategia).join('\n'));


const videojuegosDeportes = videojuegos.filter( (videojuegos) => videojuegos.categoria === "Deportes");
alert("Deportes: \n"+devolverNombres(videojuegosDeportes).join('\n'));

const videojuegosAventura = videojuegos.filter( (videojuegos) => videojuegos.categoria === "Aventura");
alert("Aventura: \n"+devolverNombres(videojuegosAventura).join('\n'));

const videojuegosSupervivencia = videojuegos.filter( (videojuegos) => videojuegos.categoria === "Supervivencia");
alert("Supervivencia: \n"+devolverNombres(videojuegosSupervivencia).join('\n'));

let opcionCategoria = true;

while(opcionCategoria) {

let elegirCategoria = "LifeGame cuenta con distintas categorias de juegos, a continuacion puedes elegir tu favorita, y ver la lista disponible de Videojuegos."

elegirCategoria += "\n 1)First-Person Shooter.";
elegirCategoria += "\n 2)Estrategia.";
elegirCategoria += "\n 3)Deportes.";
elegirCategoria += "\n 4)Aventura.";
elegirCategoria += "\n 5)Supervivencia.";
elegirCategoria += "\n 6)Salir";

let respuestaCategoria = prompt(elegirCategoria);

    switch (respuestaCategoria) {

        case "1":
            alert(videojuegosFPS);
        break;
        case "2":
            alert(videojuegosEstrategia);
        break;
        case "3":
            alert(videojuegosDeportes);
        break;
        case "4":
            alert(videojuegosAventura);
        break;
        case "5":
            alert(videojuegosSupervivencia);
        break;
        case "6" :
            alert("Gracias por visitar LifeGame!");
            opcionCategoria=false;
            break;

        case "null":
            alert("Gracias por elegir LifeGame.");
            opcionCategoria =false;
        break;
        default:
            alert("No elegiste ninguna opcion valida.");
        
    }

}


function devolverNombres(videojuegos) {


    const auxiliar = [];
for(let i = 0; i < videojuegos.length; i++){
    auxiliar.push(videojuegos[i].nombre);
    }
    return auxiliar;
} 
    


};*/