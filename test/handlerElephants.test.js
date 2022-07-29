const handlerElephants = require('../src/handlerElephants');

// NOTA: Tests muito genericos, talvez procurar formas mais complexas?

describe('Testes da função HandlerElephants', () => {
  it('caso receba o parametro count deve retornar o número 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('caso receba o parametro names retorna um array que contenha o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('caso receba o parametro averageAge retorna um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('caso receba o parametro location retorna NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('caso receba o parametro popularity retorna um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('caso receba o parametro availability retorna um array Monday', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('caso não receba parametros retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('caso receba um objeto vazio retorna: "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('caso receba uma string que não tem função deve retornar null', () => {
    expect(handlerElephants('seiLa')).toBe(null);
  });
});
