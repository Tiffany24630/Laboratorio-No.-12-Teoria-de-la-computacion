//Problema 4: eliminar de una lista todos los elementos incluidos en otra lista.
const eliminarIndicados = (lista, borrar) => {
  const conjuntoBorrar = new Set(borrar);
  
  return lista.filter((elemento) => !conjuntoBorrar.has(elemento));
};

module.exports = { eliminarIndicados };