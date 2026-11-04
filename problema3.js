//Problema 3: transponer una matriz (lista de listas).
const transponer = (matriz) => {
  if (!Array.isArray(matriz) || !matriz.every(Array.isArray)) {
    throw new TypeError("La matriz debe ser una lista de listas.");
  }

  if (matriz.length === 0) return [];

  const columnas = matriz[0].length;
  
  if (!matriz.every((fila) => fila.length === columnas)) {
    throw new Error("La matriz debe ser rectangular.");
  }

  return Array.from({ length: columnas }, (_, j) =>
    matriz.map((fila) => fila[j])
  );
};

module.exports = { transponer };