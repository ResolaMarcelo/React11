const sumar = (a, b) => a + b

let resultado = sumar(4, 10)

console.log(resultado)

const numeros = [1, 2, 3, 4, 5]

console.log(numeros.find( (n) => n > 4 ))

const productos = [
        {id: 2},
        {id: 2},
        {id: 2},
        {id: 2},
        {id: 2}
]

console.log(productos.map((el) => el.id))