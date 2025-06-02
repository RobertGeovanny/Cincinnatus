// // Tipos basicos
// const number = 1
// let n: number = 2 // en typescript hay que intentar escribir la menos cantidad de tipos posible si typescript puede hacer algo automaticamente deja que lo haga
// Repito: para los tipos basico no es necesario indicar el tipo de dato, pero para objetos y elementos mas complejos si hay que indicarlo
// let a = 'hola'
// let aaa = null
// let b: undefined = undefined

// inferencia
// como a y b infiere que son number sin decirle nada
const a = 1
const b = 2
const c = a + b
// c tambien sera number



// IMPORTANTE EN typescript: el valor 'any' le dice al lenguaje que ignore el tipado de typescript, o sea, le dice al lenguaje que ignore el tipado fuerte y que se comporte como se comportaria un valor con JavaScript\
// Por lo que lo recomendable es siempre evitar lo any
// cualquier tipo de dato
let obj: any = { x:0 };

obj.foo();
obj();
obj.bar = 100;
obj = "hello"
const n: number = obj;

// functions
// En el caso de las funciones siempre hay que indicar el tipo que es, ya que tipescript no hace magia y 
// este cuando se trata de elementos complejos como funciones no puede inferir los tipos de los argumentos
// function saludar(name) { // Da Error
//     console.log(`Hola ${name}`)
// }

// saludar('Robert')
// saludar(2) // ERROR

// FORMAS DE TIPAR OBJETOS EN typescript
// 1. Forma
// function saludar({name, age}: {name: string, age: number}) {
//     console.log(`Hola ${name}, tienes ${age}`)
// }

// saludar({ name: 'Robert', age: 2 })

// 2. Forma
// le asigna los parametros a persona, que tendra una notacion de tipos
// lo malo de esto es que te obliga a sacar name y age de persona como vemos mas abajo
// function saludar(persona: {name: string, age: number}) {
//     const {name, age} = persona
//     console.log(`Hola ${name}, tienes ${age}`)
// }

// saludar({ name: 'Robert', age: 2 })

// No solo a los parametros le podemos indicar el tipo tambien a lo que devuelve
// Interface persona
// function saludar({name, age}: {name: string, age: number}): string {
//     console.log(`Hola ${name}, tienes ${age}`)
//     return age // typescript si tiene inferencia del tipo que retorna
// } // nos da ERROR porque en los parametros indicamos que tenia que ser un string que typescript infiere que age es un number, debes tenerlo en cuenta

// saludar({ name: 'Robert', age: 2 })

// Funciones como parametros
// fat arrow functions, funciones que reciben funciones como parametro
// para tipar funciones podrias usar Function, pero esta es una forma muy general de definir la funcion, o sea, no es muy recomentdable de usar
// lo correcto es decirle cual es el tipo de la funcion que necesitamos que necesitamos
// para tipar funciones lo hacemos igual a cuando lo haciamos con los demas tipos de datos
// le colocamos (name: string) => void, 
// esto significa que la funcion esperada tiene un parametro de nombre name y que recibe un string
// y lo que devuelve en este caso 'void' porque no devuelve nada 
// void es como decirle a la funcion 'no me importa lo que devuelvas, no devuelvas nada'
// const sayHiFromFunction = (fn: (name: string) => void) => {
//     return fn('Robert')
// }

// const sayHi = (name: string) => {
//     console.log(`Hola ${name}`)
// }
// sayHiFromFunction(sayHi)

// Tipar las arrow-functions 2 formas
// const sumar = (a:number, b:number): number => {
//     return a + b;
// }

// const restar: (a:number, b:number) => number = (a, b) => {
//     return a - b;
// }

//never 
// function throwError(message: string): never {
//     throw new Error(message);
// }

// Type Alias
// type Hero = {
//   name: string
//   age: number
// }

// let hero: Hero = {
//   name: 'thor',
//   age: 1500
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero
//   return { name, age }
// }

// const thor = createHero({ name: 'Thor', age: 1500 })

// Optional properties
// type HeroId = `${string}-${string}-${string}-${string}-${string}`

// type Hero = {
//   id?: HeroId
//   name: string
//   age: number
//   isActive?: boolean
// }

// let hero: Hero = {
//   name: 'thor',
//   age: 1500
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero
//   return { 
//     id: crypto.randomUUID(),
//     name, 
//     age,
//     isActive: true
//   }
// }

// const thor = createHero({ name: 'Thor', age: 1500 })

// template union types

// type HexadecimalColor = `#${string}`

// const color: HexadecimalColor = '0033ff' //hexadecimales
// const color2: HexadecimalColor = '#0033ff' //hexadecimales

// Union Types
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' // basicamente podemos asignar una de estas opciones no mas.
// type HeroId = `${string}-${string}-${string}-${string}-${string}`

// let annn: number | string // puede ser un numero o un string
// annn = 'Hola'

// type HeroBasicInfo = {
//   name: string,
//   age: number,
// }

// type HeroProperties = {
//   readonly id?: HeroId
//   isActive?: boolean
//   powerScale?: HeroPowerScale
// }

// type Hero = HeroBasicInfo & HeroProperties


// let hero: Hero = {
//   name: 'thor',
//   age: 1500
// };

// function createHero(input: HeroBasicInfo): Hero {
//   const { name, age } = input
//   return { 
//     id: crypto.randomUUID(),
//     name, 
//     age,
//     isActive: true
//   }
// }

// const thor = createHero({ name: 'Thor', age: 1500 })
// thor.powerScale = "planetary"

// Type Indexing
// type HeroProperties = {
//   isActive: boolean,
//   address: {
//     planet: string,
//     city: string
//   }
// }

// const addressHero: HeroProperties['address'] = {
//   planet: 'Earth',
//   city: 'Madrid'
// }

// const address = {
//   planet: 'Earth',
//   city: 'Madrid'
// }

// type Address = typeof address

// const addressTwitch: Address = {
//   planet: 'Mars',
//   city: 'Twitch'
// }

// Type from function return

// function createAddress() {
//   return {
//     planet: 'Tierra',
//     city: 'Barcelona'
//   }
// }

// type Address = ReturnType<typeof createAddress>

// const languages: string[] = []; // Le indicamos que queremos un Array de strings pero solo de string, si agregamos otro tipo de dato se rompe
//                  Array<string>

// const languages: (string | number | boolean)[] = []; // para agregar mas de un tipo de dato

// languages.push('JavaScript')
// languages.push('JavaScript')
// languages.push('JavaScript')
// languages.push('JavaScript')
// languages.push(true)


