function daysToXmas(date) {
  // ¡Y no olvides compartir tu solución en redes!

  // PASO 1: CONSTANTES
  const DECEMBER_25 = new Date("Dec 25, 2021");
  const DECEMBER_25_TO_MILLISECONDS = DECEMBER_25.getTime();

  // PASO 2: SERIALIZAR EL INPUT
  const dateToMilliseconds = date.getTime();

  // PASO 3: OBTENER LA DIFERENCIA EN TIEMPO
  const differenceToMilliseconds =
    DECEMBER_25_TO_MILLISECONDS - dateToMilliseconds;

  // PASO 4: CONVERTIR LA DIFERENCIA EN DÍAS
  const MILLISECONDS_IN_ONE_SECOND = 1000;
  const SECONDS_IN_ONE_HOUR = 3600;
  const HOURS_IN_ONE_DAY = 24;
  const differenceInDays =
    differenceToMilliseconds /
    (MILLISECONDS_IN_ONE_SECOND * SECONDS_IN_ONE_HOUR * HOURS_IN_ONE_DAY);

  // PASO 5: REDONDEAR HACÍA ARRIBA LA DIFERENCIA EN DÍAS
  const days = Math.ceil(differenceInDays);

  return days;
}
