describe("Totalizador ", () => {
  it("deberia calcular para un cantidad", () => {
    expect(calcularTotal(2, 1, "")).toEqual(2);
  });
  it("deberia calcular para un cantidad", () => {
    expect(calcularTotal(2, 2, "")).toEqual(4);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(3, 2, "UT")).toEqual(6.399);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(3, 2, "NV")).toEqual(6.48);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(3, 2, "TX")).toEqual(6.375);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(3, 2, "AL")).toEqual(6.24);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(2, 2, "CA")).toEqual(4.33);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(3, 2, "CA")).toEqual(6.495);
  });
  it("deberia calcular el descuento", () => {
    expect(calcularTotal(500, 2, "")).toEqual(970);
  });
  it("deberia calcular el descuento", () => {
    expect(calcularTotal(550, 6, "")).toEqual(3135);
  });
  it("deberia calcular el descuento", () => {
    expect(calcularTotal(110, 65, "")).toEqual(6649.5);
  });
  it("deberia calcular el descuento", () => {
    expect(calcularTotal(110, 95, "")).toEqual(9405);
  });
  it("deberia calcular el descuento", () => {
    expect(calcularTotal(200, 150, "")).toEqual(25500);
  });

  

});

function impuestoEstado(estado) {
  let impuestos = { UT: 0.0665, NV:0.0800, TX:0.0625, AL:0.0400, CA: 0.0825 ,"": 0 };
  return impuestos[estado];
}
function descuento(precioTotal){
  var descuentoPrecio = 0;
  if(precioTotal >= 30000)
    descuentoPrecio = precioTotal*0.15;
  else if(precioTotal >= 10000)
    descuentoPrecio = precioTotal*0.1;
  else if(precioTotal >= 7000)
    descuentoPrecio = precioTotal*0.07;
  else if(precioTotal >= 3000)
    descuentoPrecio = precioTotal*0.05;
  else if (precioTotal >= 1000)
    descuentoPrecio = precioTotal*0.03;

  return descuentoPrecio;

}

function calcularTotal(cantidad, precio, estado) {
  let subTotal = cantidad * precio;
  let impuesto = impuestoEstado(estado);
  subTotal = subTotal - descuento(subTotal) + subTotal * impuesto;
  return subTotal;
}
