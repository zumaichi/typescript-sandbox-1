import { LineaTicket, ResultadoLineaTicket } from "./main";

export const calculaTicket = (
  lineasTicket: LineaTicket[]
): ResultadoLineaTicket[] => {
  const resultados: ResultadoLineaTicket[] = [];

  for (let i = 0; i < lineasTicket.length; i++) {
    const tipoIva = lineasTicket[i].producto.tipoIva;
    const precio = lineasTicket[i].producto.precio;
    const cantidad = lineasTicket[i].cantidad;
    let precioConIva: number = precio;

    if (tipoIva === "general") {
      precioConIva = precio * 1.21;
    } else if (tipoIva === "reducido") {
      precioConIva = precio * 1.1;
    } else if (tipoIva === "superreducidoA") {
      precioConIva = precio * 1.05;
    } else if (tipoIva === "superreducidoB") {
      precioConIva = precio * 1.04;
    } else if (tipoIva === "superreducidoC" || tipoIva === "sinIva") {
      precioConIva = precio;
    }
    resultados.push({
      nombre: lineasTicket[i].producto.nombre,
      cantidad: cantidad,
      precioSinIva: precio,
      tipoIva: tipoIva,
      precioConIva: +precioConIva.toFixed(2),
    });
  }
  return resultados;
};
