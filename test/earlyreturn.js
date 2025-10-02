function validarAlgo(num) {
  console.log("Entrada función");
  if (num > 10) {
    console.log("Entramos a la condición");
    return;
  }

  if (num % 2 == 0) {
    console.log("Entramos a la segunda condición");
    return;
  }

  console.log("Fin de la condición");
}

validarAlgo(70);
