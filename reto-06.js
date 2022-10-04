export default function sumPairs(numbers, result) {
  // ¡Y no olvides compartir tu solución en redes!

  // PASO 1: RESGUARDAR EL INPUT. INMUTABILIDAD ANTE TODO!
  const temp = [...numbers];

  // PASO 2: RECORRER LA VARIABLE MUTABLE
  for (let index = 0; index < temp.length; ++index) {
    const currentNumber = temp[index];
    const numberToSearch = result - currentNumber;
    // PASO 3: DESCARTAR EL ELEMENTO ACTUAL
    temp[index] = null;

    // PASO 4: COMPROBAR QUE EL NUMERO BUSCADO SIGA EN EL ARRAY
    if (temp.includes(numberToSearch)) {
      return [currentNumber, numberToSearch];
    }
  }

  return null;
}
