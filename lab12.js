const { ordenarPor } = require("./problema2");
const { transponer } = require("./problema3");
const { eliminarIndicados } = require("./problema4");

const telefonos = [
  { make: "Nokia", model: 216, color: "Black" },
  { make: "Mi Max", model: 2, color: "Gold" },
  { make: "Samsung", model: 7, color: "Blue" },
];

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const colores = ["rojo", "verde", "azul", "amarillo", "gris", "blanco", "negro"];
const borrar = ["amarillo", "cafe", "blanco"];

const ejecutarLaboratorio = () => {
  console.log("PROBLEMA 2 - Ordenar por model:");
  console.log(JSON.stringify(ordenarPor(telefonos, "model"), null, 2));

  console.log("\nPROBLEMA 3 - Matriz transpuesta:");
  console.log(JSON.stringify(transponer(matriz)));

  console.log("\nPROBLEMA 4 - Elementos remanentes:");
  console.log(JSON.stringify(eliminarIndicados(colores, borrar)));
};

if (require.main === module) {
  ejecutarLaboratorio();
}

module.exports = {
  ejecutarLaboratorio,
  ordenarPor,
  transponer,
  eliminarIndicados,
};