function mostrarLista() {
  // Ocultar sección de inicio
  document.getElementById("inicio").style.display = "none";

  // Mostrar sección de lista
  const seccionLista = document.getElementById("seccion-lista");
  seccionLista.style.display = "block";

  const lista = document.getElementById("lista-razones");

  if (lista.innerHTML === "") {
    const razones = [
      "Tu carita hermosa",
      "Tus labios tan lindos",
      "Tu cabello lindoo",
      "tu espaldaa jiji",
      "tu hermosa voz",
      "tus ojos que me encantan tanto",
      "tus brazos",
      "tus manos q quiero tomar",
      "tus preciosa sonrisa",
      "tu risa que me emboba tanto",
      "tu personalidad",
      "tu obesesion con los jueguitos",
      "tu ternura",
      "tu amabilidad",
      "tu empatia conmigo y los demas",
      "tu atencioon",
      "tu voz aguda jiji",
      "esa voz cuando recien despiertas",
      "esas muecas que haces",
      "tu cabello corto o largo",
      "tu voz cuando te pones a cantar",
      "tu voz con dulzura cuando hablas con dulce",
      "tu mini sonrisa cuando te da verguenza algo",
      "tu cara de enojado",
      "tu carita cuando estas serio",
      "tu carita de sueño",
      "tu mirada al verme o ver algo que te gusta",
      "tus berrinches",
      "tus dramas",
      "tus celosss como los amo",
      "tus cachetitos",
      "tu carita de concentrado",
      "tu mirada con sueño",
      "tu bondad",
      "tu cariño por los animales",
      "tu simple presencia",
      "tus chistes que aveces me hacen enojar",
      "la manera en la que te emocionas cuando algo te gusta",
      "cuando me escuchas en silencio",
      "cuando me recuerdas de algo que te dije hace mucho",
      "la manera en la que te preocupas por mi",
      "cuando estas conmigo aunque estes cansado",
      "cuando me entiendes sin que te lo diga",
      "cuando te emocionas con algo relacionado conmigo",
      "como soportas mis berrinches y celos con calma",
      "cuando me cuentas algo que te gusta",
      "como compartes tus canciones que te gustan conmigo",
      "tus besos espontaneos",
      "la manera en la que me llamas",
      "cuando dices mi nombre",
      "mirarte jugar con emocion",
      "cuando te molestas en un jueguito y los insultas jiji me da tanta ternura",
      "cuando me incluyes en tus planes",
      "cuando hablas de tener hijos conmigo",
      "la calma que me das al estar cerca de mi",
      "la calma que me transmites cuando comienzo a alterarme, solo tu puedes calmarme",
      "la seguridad que me transmites",
      "tu forma de quererme aun sin palabras",
      "los videos o fotos de lo que haces sin que lo pida",
      "tus fotos al salir de bañarte jiji",
      "lo bueno que eres en cada juego que tocas",
      "tus esfuerzos siempre por ser mejor",
      "tu paciencia conmigo",
      "tu lealtad",
      "tu vulnerabilidad cuando te abres conmigo",
      "tu sensibilidad",
      "tu manera tan intensa de amar",
      "tu sentido del humor cuando me haces enojar y tratas de contentarme",
      "tu sinceridad hasta en momentos incomodos",
      "tu confianza en mi",
      "cuando me tratas de animar cuando estoy triste",
      "simplemenmte tu esencia, lo que te hace ser tu..",
      "tu manera tan tierna de ser cuando estas conmigo despues de extrañarme",
      "la manera tan tierna cuando te distraes",
      "la manera tan linda que me haces sentir suficiente simplemente siendo yo",
      "cuando celebras mis logros por mas minimos que sean",
      "la forma de tratar a tu familia con cariño y con humor",
      "la forma en la que cuidas de tu hermanita",
      "tu manera tan alegre de ser cuando estas con los demas",
      "tu manera de cuidar a los animales",
      "tus pequeños gestos de cariño",
      "los regalos sorprensa que me das",
      "tu cariño constante sin importar los problemas",
      "tu deseo constante de querer estar cerca de mi",
      "la manera en la siempre cuidas nuestra relacion sin importar las peleas",
      "porque contigo aprendi que el amor es tan profundo y tan hermoso",
      "porque contigo entendi que el amor debe sentirse bonito, jamas debe doler",
      "porque cuando me miras me haces sentir la mujer mas hermosa",
      "porque contigo perdi el miedo al futuro, porque estaras en el",
      "porque tu existencia le da sentido a mis días",
      "porque amas la música tanto que le pones alma cuando la cantas",
      "porque jamas me niegas nada",
      "porque siempre aceptas hacer de todo conmigo aunque no se algo que a ti te guste mucho",
      "porque te emocionas cuando descubres algo nuevo que te gusta",
      "tus celos cuando me ves muy linda cuando realmente solo busco impresionarte a ti",
      "la manera tan tierna que reaccionas cuando hay chocotorta",
      "tu obsesion con las pizzas de tu mamá",
      "tu emocion cuando comes algo rico",
      "cuando cocinas algo y te das cuenta que te quedo muy rico",
      "simplemente tu, solo tu mi amor"

      

      // Puedes seguir hasta la 100 :)
    ];

    for (let i = 0; i < razones.length; i++) {
      const li = document.createElement("li");
      li.textContent = razones[i];
      lista.appendChild(li);
    }
  }
}
