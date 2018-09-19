---
path: "/typescript-basic"
date: "2018-09-19"
title: "Typescript Basic"
tags: ['typescript']
excerpt: ""
type: ""
---

## 1. Typescript 란?

1. 강타입의 자바스크립트 - 자바스크립트는 동적 타입 언어(dynamically typed language)이다. 타입스크립트는 정적 타입 자바스크립트(statically typed javascript)이다.

   * [동적 타입, 정적타입이란?](https://medium.com/@gaperton/typescript-static-or-dynamic-64bceb50b93e)

     * 동적 타입: 타입이 value(주로 반환되는 값)와 연결되어 있고, 런타임에 체킹된다.
     * 정적 타입: 타입이 variable 과 연결되어 있고, 컴파일 단계에서 체킹된다.

   * 타입의 종류 : `number | string | boolean | undefined | null | object | symbol` (ES6 에서 추가된 타입)

2) "Javascript that scales"

   * TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. (공식사이트)
   * Typescript is a language for application scale Javascript.(Github)

![typscript-superset](https://qph.fs.quoracdn.net/main-qimg-b4ea5e4175b7ea1105895f131e9614cc.webp)

3. Compiler

   * 최신 ECMAScript 를 타이트하게 반영하는 superset/compiler 이다. config 에서 어떤 버전을 쓸지 지정한다.

   ```javascript
   // tsconfig.json
   "compilerOptions": {
       "module": "commonjs",    // "esnext" 해야 chunk file 가능해짐
       "target": "es5",
       "moduleResolution": "node",
       "strictNullChecks": true,
       "noUnusedLocals": true,
       "removeComments": true
   }
   ```

   * 타입스크립트는 컴파일 단계에서 타입 체킹이 되기도 하지만 IDE 에서 코드를 쓸 때부터 체킹이 되기도 한다. (파일 확장자명을 `.ts`(jsx 에 대해선 `.tsx`)로 쓴다.)

---

## 2. 장점

1. 클라이언트단에서 어떤 값을 줬는지 매번 값을 파싱해서 수정하거나, validation 해주지 않아도 됨
   * unit test 를 할 때도, type checking 을 하지 않아도 된다.
2. 코드(특히 interface) 자체가 명세서가 된다.
   * string, number 등의 primitive type 는 당연히 체킹되고, method 의 작동 방식도 미리 정의해둘 수 있다.
3. 더 나은 에러

   * 컴파일 단계에서, 또는 코드를 쓰는 단계에서에러도 `...is undefined` 보다 도움이 되는 에러 메시지가 나온다.
     https://medium.freecodecamp.org/typescript-javascript-with-super-powers-a333b0fcabc9
     https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
     typescript gives all the benefits of ES6, plus more productivity

4. Typescript 에서 정의해준 빌트인 DOM APIs 에서 import 해서 쓰면 너무나 편리!

---

## 3. Basic syntax

https://typescriptcourses.com/typescript-fundamentals

```javascript
function test<T>(arg: T): T {
    return arg
}

test(1).toFixed()   // ok
test('1').toFixed()     // 에러남

test('James').substring(...)    // ok
test(123).substring(...)    // 에러남
```

1. 첫번째 T 는 타입 이름 정의 (`interface T {}` 처럼 정의해서 쓸 때. arg 와 return 값이 primitive 면 굳이 필요없음)
2. 두번째 T 는 그 타입을 arg 를 받을 때 쓴다는 거고
3. 세번째 T 는 리턴 값도 그 타입이어야 한다는 뜻. (즉 이 함수는 인풋과 리턴의 타입이 같아야하는 함수)
   * 그래서 `test(1).toFixed()` 에서 `test(1)`의 리턴값이 number 이기 때문에 number 의 멤버함수 `.toFixed()`를 쓸 수 있다.
   * 두번째도 마찬가지, 리턴값이 자동으로 string 이기 때문에 바로 `.substring` 을 붙여써도 에러가 나지 않는다. 자바스크립트였다면 런타임에 에러가 났을 것.
   * 그러나 만약에 함수가 `function test<T>(arg: number): number {}` 이런식으로 정의되어 있었다면, 두번째는 에러가 날것.

---

## 4. Generic 이란?

```javascript
function identity(arg: number): number {
  return arg;
}

function identity(arg: any): any {
  return arg;
}
```

이렇게 두개가 있으면 아래처럼 쓸 수 있는걸 generic.

```javascript
function identity<T>(arg: T): T {
  return arg;
}
```

---

## 5. import

`import \* TS1192: Module has no default export.`와 같은 타입스크립트 에러 해결하기

```javascript
// 이렇게 해서 에러가 나면
import { Waypoint } from "react-waypoint";
import Waypoint from "react-waypoint";
// 이렇게 바꿔보자
import * as Waypoint from "react-waypoint";
```

* default export 가 없을 경우에 이런 에러가 남

---

## 6. enum

* enumerate: 열거하다. 특정 값들을 associate 하는 것

  ```javascript
  enum Transport {
    train,
    bus,
    bike,
    car
  }

  let myTransport = Transport.bus;
  console.log(myTransport); // 1
  ```

* Type 'string' is not assignable to type '"tier" | "episode" | "milestone"'. 에러 슈팅하기

  ```javascript
  // don't
  interface A {
      a: "train" | "bus" | "bike"
  }
  // do
  enum B {
      train = "ktx",
      bus = "express bus",
      bike = "pixie"
  }
  interface A {
      a: B
  }
  ```

---

## 7. type assertion `as`

```javascript
document.getElementById('root') as HTMLElement
HTMLElement | null
// 또는
document.getElementById('root’)!
// removes null and undefined from the prior expression
```

---

## 8. namespace & interface

1. interface : propTypes 등록 + 그들의 타입 지정

   ```javascript
   // props 와 state가 type이 있다고 선언하는 부분.(그 타입이 뭔지는 다른 곳에 정의한다.) 컴포넌트에서 항상 타입을 지정해줄 땐 이 두 개를 넘겨야 한다.
   class Component<Props, State> {
       props: Props;
       state: State;

       constructor(props: Props) { }
   }

   // namespace는 단순히 props가 어디 속한 애인지 알려주는 역할
   export namespace Comp {
       // interface는 원래 아래 class 내에서 정의되었던 {prop1: prop1Type}들을 따로 모아둔 곳. 이제는 AProps란 이름으로 아래 {prop: prop1Type}의 모음에 접근할 수 있다.
       export interface AProps {
           prop1: string;
           prop2: number;
       }
       // export interface AState {
       //    attr: string;
       //    show: boolean;
       // }
       // 와 같이 선언하고 아래에서 Comp.AState로 받아올 수도 있다.
   }

   type AState = {
       attr: string;
       show: boolean;
   }

   class A extends Component<Comp.AProps, AState> {
       constructor(props: Comp.AProps) {
           super(props);
           this.state = {
               attr: `${props.prop1}${props.prop2}`,
               show: true
               // show: 1
           };
       }
   }

   const a = new A({ prop1: 'prop1', prop2: 123 });
   // const b = new A({ wrong: 'prop1', prop2: "123" });
   // const b = new A({ prop1: 1, prop2: "123" });
   ```

2. The interface LabelledValue is a name we can now use to describe the requirement in the previous example (https://www.typescriptlang.org/docs/handbook/interfaces.html)
   interface Props {} 와 type Props = Array<string> 의 차이
   interface 는 object 이기 때문에 여러개의 key-value pair 로 확장이 가능

---

## 9. void

1. typescript 에서 리턴값이 없는 함수를 정의할 때
   https://www.typescriptlang.org/docs/handbook/basic-types.html

1. https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html - Don’t use the return type any for callbacks whose value will be ignored:

```javascript
/* WRONG */
function fn(x: () => any) {
  x();
}
// Use the return type void for callbacks whose value will be ignored:
/* OK */
function fn(x: () => void) {
  x();
}
// Why: Using void is safer because it prevents you from accidently using the return value of x in an unchecked way:
function fn(x: () => void) {
  var k = x(); // oops! meant to do something else
  k.doSomething(); // error, but would be OK if the return type had been 'any'
}
```

```javascript
// 정의할 때
function warnUser(): void {
  alert("This is my warning message");
}

// prop으로 받을 때
interface Props {
  onSubmit: (value: string) => void;
}
```
