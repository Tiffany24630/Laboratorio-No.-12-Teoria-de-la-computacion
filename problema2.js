//Problema 2: ordenar una lista de objetos por una propiedad indicada.
const ordenarPor = (lista, key) =>
  [...lista].sort((a, b) => {
    const x = a[key];
    const y = b[key];

    if (x === undefined || y === undefined) {
      throw new Error(`La propiedad "${key}" debe existir en todos los objetos.`);
    }

    if (typeof x === "number" && typeof y === "number") return x - y;
    
    return String(x).localeCompare(String(y), "es", { numeric: true });
  });

module.exports = { ordenarPor };