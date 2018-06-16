---
path: "/event-handling"
date: "2018-04-27"
title: "Event handling"
tags: ['javascript']
excerpt: ""
type: "post"
---

> 개인적인 공부 노트로 오류가 있을 수 있습니다.

## 0. DOM Manipulation

https://eloquentjavascript.net/15_event.html
https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/

- 버튼을 클릭했을 때 parent node를 삭제하는 함수를 만들어보자. [source](https://www.testdome.com/questions/javascript/image-gallery/13782?visibility=1&skillId=2)

```javascript
function setup() {
  var nodes = document.querySelectorAll('button')
  Array.from(nodes, node => node.addEventListener('click', removeParent))
}

function removeParent(event) {
  var parent = event.target.parentNode
  parent.parentNode.removeChild(parent)
}
```

1. 모든 노드에 `eventListner`를 추가해야 한다. :arrow_right: map을 사용한다.
    - `NodeList`는 유사 배열이기 때문에 `Array.from()`으로 배열로 만들어준다. 
    - `.from()` 메소드에 map 콜백을 받는다. 그래서 처음엔 `Array.from(nodes).map(node => cb())`으로 썼다가 `Array.from(nodes, node => cb())`로 리팩토링 했다.
2. 노드를 삭제하는 함수 `removeParent`를 분리했다. ([SRP](https://en.wikipedia.org/wiki/Single_responsibility_principle))
    - 이 함수는 이벤트리스너의 콜백이다. __event가 일어나는 element를 manipulate__ 해야하기 때문에 `event`를 인자로 받고 `event.target`을 조작한다.
    - `parentNode`는 읽기 전용이기 때문에 삭제할 수 없다. parent 의 parent로 가서 `removeChild()`를 시전한다.

---

## 1. [`event.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

브라우저의 default behavior를 막는 것이다. 예를 들어, form을 제출할 때, 화면 refresh를 막는 경우가 있다.

```javascript
const form = document.querySelector('form')
const button = document.querySelector('button')

function onSubmit(event) {
  event.preventDefault()  // event는 SyntheticEvent의 인스턴스이다.
  // submit behavior...
}

button.addEventListener('click', onSubmit)
```

---

## 2. `event.stopPropagation()`

[이벤트 캡쳐링과 버블링에 있어 현재 이벤트 이후의 전파를 막습니다.](https://developer.mozilla.org/ko/docs/Web/API/Event/stopPropagation)
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples#Example_5:_Event_Propagation

---

## 3. event delegation


...

https://medium.com/@bretdoucette/part-4-what-is-event-delegation-in-javascript-f5c8c0de2983
https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/
---