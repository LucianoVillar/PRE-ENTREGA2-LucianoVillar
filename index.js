//FUNCION PARA CREACION DE USUARIO.

const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");

function usuario(){ 
if((nombre != "") && (apellido != "")) {
    alert("Bienvenido a LifeGame " + nombre + " " + apellido + " ,esperamos puedas disfrutar de algunos de los titulos que tenemos!")
}else{
    alert("Aunque no hayas ingresado lo solicitado, eres bienvenido a la Experiencia LifeGame!")
    };
    console.log("El usuario de la pagina es " + nombre + " " + apellido );
}

usuario();

//FUNCION PARA VALIDAR EDAD DE LA PERSONA QUE INGRESE A LA PAGINA.

function validarEdad() {
    let edad = parseInt(prompt("Introducir tu edad"));
    while((isNaN(edad)) || (edad < 18 ) ) {
        alert("Debes de agregar una edad valida para poder ingresar a LifeGame.");
    edad = parseInt(prompt("Ingrese otra edad"));
    }
    alert("Tu edad es " + edad + " años, Bienvenido " + nombre + " " + apellido + " a LifeGame !");
    console.log("La edad del usuario es de " + edad + " años.");
};

validarEdad();

//FUNCION CON OPCIONES PARA QUE EL USUARIO PUEDA ELEGIR QUE QUIERE REALIZAR

let marcarOpcion = true;
while(marcarOpcion) {

let mensajeOpciones = "Bienvenida al selector de opciones de LifeGame, a continuacion tendras varias opciones para poder disfrutar de nuestro contenido."

    mensajeOpciones += "\n 1) Propuesta para agregar nuevo juego para la pagina.";
    mensajeOpciones += "\n 2) Propuesta para dar de baja la venta de un juego.";
    mensajeOpciones += "\n 3) Calcular monto de juego con descuento elegido.";
    mensajeOpciones += "\n 4) Descripcion de un juego.";
    mensajeOpciones += "\n 5) Entrar a LifeGame.";

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
            descripcionJuego();
        break;
        case "5" :
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

//FUNCION PARA AGREGAR JUEGO

function agregarJuego() { 

let nombreJuego = prompt("Ingrese nombre del juego.");
let preciojuego = parseInt(prompt("Ingrese valor del juego."));

if((nombreJuego !="") && (!isNaN(preciojuego))){
    alert("El nombre y el precio recomendados, fueron ingresados con exito, gracias por colaborar para que LifeGame cada dia sea mejor.");
}else{
    alert("Error: Ingresar nombre y precio");
}

console.log("El juego que ingresaste es " + nombreJuego + " y el precio del juego es " + preciojuego);


};

//FUNCION PARA QUITAR JUEGO

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

console.log("El juego que quieres sacar es " + quitarJuego + " y la descripcion es " + descripcionJuego);

};

//FUNCION PARA CALCULAR DESCUENTO DE JUEGO

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

console.log("El costo del articulo con el descuento solicitado es de " + montoDescuento + " pesos.")

}

//FUNCION QUE DEMUESTRE DESCRIPCION DE JUEGOS

function descripcionJuego() {

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
    const juego1 = new Juego("Counter Strike Global Offensive", "FPS", "Counter-Strike: Global Offensive (CS:GO) amplía el juego de acción por equipos del que fue pionero cuando salió hace más de 20 años. CS:GO incluye nuevos mapas, personajes, armas y modos de juego, y ofrece versiones actualizadas del contenido clásico de Counter-Strike (de_dust2, etc.).", 0) ;
    const juego2 = new Juego("League of Legends", "Estategia", "League of Legends es un juego de estrategia por equipos en el que dos equipos de cinco campeones se enfrentan para ver quién destruye antes la base del otro. Elige de entre un elenco de 140 campeones para realizar jugadas épicas, asesinar rivales y derribar torretas para alzarte con la victoria.", 0);
    const juego3 = new Juego("Age of Empires II", "Estrategia", "Age of Empires II: Definitive Edition incluye Los últimos khanes, que incorpora 3 campañas y 4 civilizaciones nuevas. Las frecuentes actualizaciones contienen eventos, contenido adicional, nuevos modos de juego (¡como el reciente modo cooperativo!) y funciones mejoradas.", 105);
    const juego4 = new Juego("FIFA 23", "Deportes", "Vive la emoción del mayor torneo futbolístico con EA SPORTS™ FIFA 23 y la actualización de la FIFA World Cup™ masculina, ¡disponible el 9 de noviembre sin coste adicional!", 1200);
    const juego5 = new Juego("F1 22", "Deportes", "Entra en la nueva era de la Formula 1® en EA SPORTS™ F1® 22, el videojuego oficial de FIA Formula One World Championship™ 2022", 1040);
    const juego6 = new Juego("New World", "MMORPG", "Explora un emocionante MMO de mundo abierto repleto de peligros y oportunidades en el que forjarás un nuevo destino en la isla sobrenatural de Aetérnum.", 399);
    const juego7 = new Juego("Project Zomboid", "Supervivencia", "Project Zomboid is the ultimate in zombie survival. Alone or in MP: you loot, build, craft, fight, farm and fish in a struggle to survive. A hardcore RPG skillset, a vast map, massively customisable sandbox and a cute tutorial raccoon await the unwary. So how will you die? All it takes is a bite..", 287);
    const juego8 = new Juego("Grounded", "Supervivencia", "The world is a vast, beautiful and dangerous place especially when you have been shrunk to the size of an ant. Can you thrive alongside the hordes of giant insects, fighting to survive the perils of the backyard?", 535);
    const juego9 = new Juego("NBA 2k23", "Deportes", "Ponte a la altura de las circunstancias en NBA 2K23. Demuestra tu talento en Mi CARRERA. Empareja a All-Stars con leyendas eternas en MyTEAM. Construye tu propia dinastía en Mi GM, o guía a la NBA en una nueva dirección con Mi LIGA. Enfréntate a equipos de la NBA o de la WNBA en JUGAR AHORA y siente el juego real.", 874);
    const juego10 = new Juego("Valorant", "FPS", "Valorant es un juego de disparos tácticos que involucra a dos equipos con 5 jugadores en cada equipo. Todos los jugadores pueden iniciar sesión y jugar de forma remota desde cualquier parte del mundo. Cada juego tiene 25 rondas y el equipo que gana 13 de ellos primero gana el juego. Los jugadores pueden elegir sus personajes en el juego llamados agentes al comienzo del juego.", 0);
    const juego11 = new Juego("Among Us", "Multijugador", "Un juego de socialización local o en línea de trabajo en equipo y traición para 4 a 15 jugadores... ¡ambientado en el espacio!", 84);
    const juego12 = new Juego("Dying Light 2 Stay Human", "Zombis", "El virus ha ganado y la civilización ha vuelto a la Edad Oscura. La Ciudad, uno de los últimos asentamientos de la humanidad, está al borde del abismo. Con tu agilidad y tu maestría del combate, deberás sobrevivir y dar forma al mundo. Tus decisiones importan.", 999);
    const juego13 = new Juego("Elden Ring", "Rol", "EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.", 1540);
    const juego14 = new Juego("Red Dead Redemtion II", "Aventura", "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por toda América en el albor de una nueva era. También incluye acceso al mundo multijugador compartido de Red Dead Online.", 527);
    const juego15 = new Juego("Hogwarts Legacy", "Aventura", "Hogwarts Legacy es un RPG inmersivo de acción en mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico.", 1899);
    const juego16 = new Juego("Sea of Thieves", "Aventura", "Sea of Thieves ofrece la experiencia de piratasdefinitiva, desde la navegación y elcombate hasta la exploración y elsaqueo: todo para disfrutar de la vidapirata y convertirteenleyenda. No hay funcionesestablecidas, tienes total libertad para enfrentarte al mundo y a los demásjugadorescomodesees.", 399);
    const juego17 = new Juego("Destiny 2", "FPS", "Destiny 2 es un MMO de acción con un mundo único y dinámico al que tus amigos y tú os podéis unir en cualquier momento y desde cualquier lugar de forma totalmente gratuita.", 0);
    const juego18 = new Juego("Stray", "Aventura", "Perdido, solo y separado de su familia, un gato callejero debe desentrañar un antiguo misterio para escapar de una ciberciudad olvidada y encontrar el camino a casa.", 519)

const elegirJuego = prompt("Ingrese nombre como se observa en la pagina para ver descripcion del juego solicitado. Ejemplo: Age of Empires II o Counter Strike Global Offensive.").toLowerCase();
console.log(elegirJuego);

    switch(elegirJuego){

    case "counter strike global offensive" :
        juego1.propiedad();
    break;
    case "league of legends" :
        juego2.propiedad();
    break;
    case "age of empires ii" :
        juego3.propiedad();
    break;
    case "fifa 23" :
        juego4.propiedad();
    break;
    case "f1 22" : 
        juego5.propiedad();
    break;
    case "new world" :
        juego6.propiedad();
    break;
    case "project zomboid" :
        juego7.propiedad();
    break;
    case "grounded" :
        juego8.propiedad();
    break;
    case "nba 2k23" :
        juego9.propiedad();
    break;
    case "valorant" :
        juego10.propiedad();
    break;
    case "among us" :
        juego11.propiedad();
    break;
    case "dying light 2 stay human" :
        juego12.propiedad();
    break;
    case "elden ring" :
        juego13.propiedad();
    break;
    case "red dead redemtion ii" :
        juego14.propiedad();
    break;
    case "hogwarts legacy" : 
        juego15.propiedad();
    break;
    case "sea of thieves" :
        juego16.propiedad();
    break;
    case "destiny 2" :
        juego17.propiedad();
    break;
    case "stray" :
        juego18.propiedad();
    break;
    case "":
       alert("No ingresaste un juego de LifeGame.");
       break;
    default:
        alert("No existe dicho juego en LifeGame.") ;
    }

};

//crear arrays con categorias para filtrar juegos

