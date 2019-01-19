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

const f1 = fetch('/something.json')
const f2 = fetch('/something2.json')
Promise.all([f1, f2])
  .then(res => {
    console.log('Array of results', res)
  })
  .catch(err => {
    console.error(err)
  })

  const promiseOne = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one')
  })
  const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two')
  })
  Promise.race([promiseOne, promiseTwo]).then(result => {
    console.log(result) // 'two'
  })

Promise.all([f1, f2]).then(([res1, res2]) => {
    console.log('Results', res1, res2)
  })



  const doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }

  const doSomething = async () => {
    console.log(await doSomethingAsync())
  }

  const doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }
  const doSomething = async () => {
    console.log(await doSomethingAsync())
  }
  console.log('Before')
  doSomething()
  console.log('After')

  const aFunction = async () => {
    return 'test'
  }
  aFunction().then(alert) // This will alert 'test'

  const aFunction = async () => {
    return Promise.resolve('test')
  }
  aFunction().then(alert) // This will alert 'test'

  const list = ['Apple', 'Orange', 'Egg']
list.map(item => item[0]).filter(item => item === 'A') //'A'

const Button = props => {
    return <button>{props.text}</button>
  }
  const SubmitButton = () => {
    return <Button text="Submit" />
  }
  const LoginButton = () => {
    return <Button text="Login" />
  }

  const Button = props => {
  return <button onClick={props.onClickHandler}>{props.text}</button>
}
const LoginButton = props => {
  return <Button text="Login" onClickHandler={props.onClickHandler} />
}
const Container = () => {
  const onClickHandler = () => {
    alert('clicked')
  }
  return <LoginButton onClickHandler={onClickHandler} />
}

const Sidebar = props => {
    return <aside>{props.children}</aside>
  }

  <Sidebar>
  <Link title="First link" />
  <Link title="Second link" />
</Sidebar>

const elements = ['one', 'two', 'three'];
return (
  <ul>
    {elements.map((value, index) => {
      return <li key={index}>{value}</li>
    })}
  </ul>
)

class BlogPostExcerpt extends Component {
    constructor(props) {
      super(props)
      this.state = { clicked: false }
    }
    render() {
      return (
        <div>
          <h1>Title</h1>
          <p>Description</p>
        </div>
      )
    }
  }

  class BlogPostExcerpt extends Component {
    constructor(props) {
      super(props)
      this.state = { clicked: false }
    }
    render() {
      return (
        <div>
          <h1>Title</h1>
          <p>Description</p>
          <p>Clicked: {this.state.clicked}</p>
        </div>
      )
    }
  }