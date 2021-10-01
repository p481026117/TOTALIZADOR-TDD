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
});

function impuestoEstado(estado) {
  let impuestos = { UT: 0.0665, NV:0.0800, TX:0.0625, AL:0.0400, CA: 0.0825 ,"": 0 };
  return impuestos[estado];
}

function calcularTotal(cantidad, precio, estado) {
  let subTotal = cantidad * precio;
  let impuesto = impuestoEstado(estado);
  subTotal = subTotal + subTotal * impuesto;
  return subTotal;
}
