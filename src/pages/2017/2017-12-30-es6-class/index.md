---
path: "/es6-class"
date: "2017-12-30"
title: "Classes"
tags: ['Javascript']
excerpt: "ES6 in depth"
type: ""
---

출처 - [Mozilla Hacks](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/)

> 개인적인 공부 노트로, 내용에 오류가 있을 수 있습니다.

자바스크립트에서 class는 원래 function이다. class를 흉내낸 것. typeof 찍으면 function으로 나온다. 

---

## 1. `constructor` 메소드

```javascript
class Coffee {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

// 객체 생성하기
var latte = new Coffee("latte", 3000)
```

- Python 의 초기화 함수 `__init__()`과 같다.
- 객체를 생성할 때마다 불려진다. 
- class에서 constructor는 있을 수도, 없을 수도 있다. 

---

## 2. 메소드와 `static` 메소드

```javascript
class A {
    static sum(a, b) {
        return a + b;
    }
    sub(a, b) {
        return a - b;
    }
}

// static 메소드
A.sum(1, 2)
// 멤버 메소드
var a = new A()
a.sub(2, 1)
```
- `static` : 클래스 단에서 실행되는 메소드
    - 인스턴스는 이 메소드를 사용할 수 없다. 반대로 클래스는 멤버 함수를 바로 쓸 수 없다. (인스턴스를 생성하고 인스턴스 단에서 실행해야 한다.)
    - 인스턴스별로 달라지지 않고 클래스 단에서 쓰는 utility 를 만들고 싶을 때 사용한다. 

---

## 3. `extends`
- 부모 클래스를 상속받을 수 있는 키워드이다. 
```javascript
class App extends React.Component {
    constructor() {
        super() // React에서 `constructor() {}` 메소드는 언제나 그 안에서 `super()`메소드를 불러야 한다. 이걸 쓰지 않으면 `missing super() call in constructor` 에러가 난다.
        this.state = {...}
    }
    componentDidMount() {
        this.setState({...}) // `React.Component`를 상속받았기 때문에 그 안에 정의되어 있는 `.setState()`메소드를 사용할 수 있다.
    }
    render() {
        return ...
    }
}
```
- [React Components - Mounting](https://reactjs.org/docs/react-component.html#mounting) : 컴포넌트의 인스턴스가 생성되고, DOM에 들어갈 때 이 메소드들이 (__번호 순서대로__) 불려진다. 

    1. `constructor()`
    2. `componentWillMount()`
    3. `render()`
    4. `componentDidMount()`

---

## 4. `super()` 
```javascript
class A {
    constructor(name) {
        this.name = name
    }
    sayName() {
        console.log(`Hi! My name is ${this.name}.`)
    }
}

class B extends A {
    constructor(name, age) {
        super(name)
        this.age = age
    }
    sayNameAndAge() {
        super.sayName()
        console.log(`I'm ${this.age} years old.`)
    }
}

var me = new B('Jiyoung', 27)
me.sayNameAndAge()
// Hi! My name is Jiyoung.
// I'm 27 years old.
```