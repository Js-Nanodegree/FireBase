var a = 1
const b ='Rerd'
let c = {b:a}
// const func = () =>{try{ console.log('добавь данных')}catch(e){console.log('ошибка')}} 
const fun = (c) =>{ return (c) } 
console.log(fun(c))
const car ={
    model:'Ferra',
    color:'Ford',
    size:'M',
    FullName: function(){
        return `${this.color} ${this.model}`
    }
}
const numbers = [1, "dsadas", 3, 4, 5]
const sum = (a, b, c, d, e) => a + b + c + d + e
const sum = sum(...numbers)

const items = { first, second, ...others }
items 

const person = {
  firstName: 'Tom',
  lastName: 'Cruise',
  actor: true,
  age: 54 //made up
}
const { firstName: name, age } = person


class Person {
    constructor(name) {
      this.name = name
    }
    hello() {
      return 'Hello, I am ' + this.name + '.'
    }
  }

  const flavio = new Person('Flavio')
flavio.hello()

class Programmer extends Person {
    hello() {
      return super.hello() + ' I am a programmer.'
    }
  }
  const flavio = new Programmer('Flavio')
  flavio.hello()

  class Person {
    static genericHello() {
      return 'Hello'
    }
  }
  Person.genericHello() 

  class Person {
    constructor(name) {
      this.name = name
    }
    set name(value) {
      this.name = value
    }
    get name() {
      return this.name
    }
  }

  class Person {
    constructor(name) {
      this.name = name
    }
    get name() {
      return this.name
    }
  }

  class Person {
    constructor(name) {
      this.name = name
    }
    set name(value) {
      this.name = value
    }
  }

  const myFirstPromise = new Promise((resolve, reject) => {
    // выполняется асинхронная операция, которая в итоге вызовет:
    //
    //   resolve(someValue); // успешное завершение
    // или
    //   reject("failure reason"); // неудача
  });

  const isItDoneYet = new Promise()
//...
const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}