function alturaTrianguloIsosceles(
  trianguloGrandeLadoA,
  trianguloGrandeLadoB,
  trianguloGrandeLadoBase,
) {
  if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
    console.error("Los lados a y b no son iguales");
  } else {
    const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
    const trianguloPequenoLadoBase = trianguloGrandeLadoA;

    const trianguloPequenoLadoBCuadrado =
      trianguloPequenoLadoB * trianguloPequenoLadoB;
    const trianguloPequenoLadoBaseCuadrado =
      trianguloPequenoLadoBase * trianguloPequenoLadoBase;

    const trianguloPequenoLadoA = Math.sqrt(
      trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado,
    );

    const trianguloGrandeAltura = trianguloPequenoLadoA;
    return trianguloGrandeAltura;
  }
}

function altura(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 != base) {
    alert("isoceles");
    const altura = Math.sqrt(lado1 ** 2 - base ** 2 / 4);
    console.log(altura);
  } else {
    alert("no lo se");
  }
}
altura(6, 6, 4);
