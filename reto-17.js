export default function countPackages(carriers, carrierID) {
  // ¡No olvides compartir tu solución en redes!

  // PASO 1: ESTADO INICIAL
  let packages = 0;

  // PASO 2: BUSCAR EL CARRIER EN EL ARRAY DE CARRIERS DADO EL CARRIER_ID
  const currentCarrier = carriers.find((carrier) => carrier[0] === carrierID);
  const currentPackagesToManage = currentCarrier[1];
  const currentSubordinates = currentCarrier[2];

  // PASO 3: AÑADIR AL CONTADOR DE PAQUETES LA CANTIDAD DEL CARRIER ACTUAL
  packages += currentPackagesToManage;

  // PASO 4: EJECUTAR LA RECURSIVIDAD EN LOS SUBORDINADOS
  currentSubordinates.forEach((subordinate) => {
    packages += countPackages(carriers, subordinate);
  });

  return packages;
}
