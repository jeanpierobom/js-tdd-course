function sum(a, b) {
  return a + b;
}

// named export
// vários dentro de um arquivo
// importar com o mesmo nome
// precisa de chaves
export function sub(a, b) {
  return a - b;
}

// método principal
// só pode ter um default por arquivo
// importar com qualquer nome
// não precisa usar chaves
export default sum;
