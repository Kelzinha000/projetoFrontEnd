import areaQuadrada from './funcao.js'
console.log(areaQuadrada(5))
// Arrow Function - Deixar o codigo mais economico 

// function Soma (a, b){
//     return a + b
// }
const Soma = (a , b) => a + b;

// Destructuring

function MouseMove(event) {
    const clientY = event.clientY
    const clientX = event.clientX
    console.log(clientY)
}

const MouseMoving = (event)=> {
    const {clientX, clientY} = event
    console.log(clientY, clientX)
}
const MouseHandle = ({clientX, clientY}) => console.log(clientX, clientY)

// document.documentElement.addEventListener('mousemove', MouseHandle); 
const frutas = ['banana', 'maçã' , 'Pera']
const [banana, maca] = frutas
// console.log(maca)

// Rest 
const showList = (empresa,...funcionarios) => {
    // console.log(empresa,...funcionarios)
    funcionarios.forEach((funcionario) => {
        // console.log(funcionario, empresa)
    })
}
// showList('Senai', 'Carlos', 'Leticia', 'Bruno', 'Márcia')

// Spread
const numeros = [12, 13 , 21 ,30 , 4 , 6 ,7 ]
const maior = Math.max(...numeros) 
console.log(numeros)
// console.log(maior)
 
const carro = {
    cor: 'prata', 
    ano : 2008, 
    modelo : 'Ka'     
}  
// arryas e filters mas se eu quiseradicionar mais inormações no array? >>
const marcaCarro = {...carro, marca:'Ford'}

const compras = [
    'R$200',
    'R$150',
    'R$550',
    'R$300',
    '6S50',
    'shampoo',
    'Creme de gato',

]

const precoFiltro = compras.filter((preco)=>(preco.includes)(0))

const precoNumeros = precoFiltro.concatmap((preco)=> Number(preco.replace('R$','')))

console.log(precoNumeros)
// operadores ternários 

const csa = 1
const crb = 2

const vencedor = cbr > csa ? 'CRB venceu' : 'CSA venceu'
console.log(vencedor)