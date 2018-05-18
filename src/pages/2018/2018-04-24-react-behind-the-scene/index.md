---
path: "/react-behind-the-scene"
date: "2018-04-24"
title: "React behind the scene"
tags: ['react', 'lifecycle']
excerpt: "How React works - lifecycle, render, update, event handling"
type: ""
---

> 개인적인 공부 노트로, 오류가 있을 수 있습니다.

React는 [UI를 만드는 자바스크립트 라이브러리](https://reactjs.org/)이다. [JQuery가 명령형 프로그래밍이면, React는 선언적 프로그래밍이라고 할 수 있다](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2). 라이브러리이기 때문에 다른 프런트엔드 프레임워크에 얹는 것도 가능하다. 

---

## 1. How does it work?

1. Component
    - 리액트의 기본적인 단위는 '컴포넌트'이다.
    - 클래스 컴포넌트든, 함수 컴포넌트든 리액트는 prop을 input으로 받고, element를 output으로 뱉는 컴포넌트이다.[<sup>1</sup>](#sources)
    - 컴포넌트는 element tree를 encapsulate 한다.[<sup>2</sup>](#sources)

2. Virtual DOM
    - virtual DOM을 manipulate 하고 모든 event loop이 끝나면 diff 를 계산한 뒤 일괄적으로 실제 DOM 에 반영한다. 오직 큰 변화가 있을 때만 `render()`를 호출하는 것. JSX가 실제 DOM 노드를 반환하는 건 아니고 얕은 리액트 DOM으로 컴파일 된다.[<sup>3</sup>](#sources)
    - DOM을 그냥 업데이트만 하는 게 아니라, 어떤 것으로 업데이트 할 건지도 기억한다. diff를 빠르게 계산하기 위해서이다.[<sup>3</sup>](#sources)

3. State / Prop
    -  state는 컴포넌트의 상태이다. state가 `setState`를 통해 업데이트 되면, 그 자식 컴포넌트들은 다시 렌더링된다.
    - `render()`는 state, prop이라는 인자를 받아서 실행하는 함수일 뿐이다! [<sup>3</sup>](#sources) 
    - __'모든 리액트 컴포넌트는 자신의 prop에 대한 순수 함수처럼 동작해야 한다'__ 라고 리액트 공식문서에 무려 볼드체로 되어있다.[<sup>4</sup>](#sources)

4. [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

---

## 2. Mounting

컴포넌트의 인스턴스가 생성되고, DOM에 들어갈 때 이 메소드들이 아래 __순서대로__ 실행된다. [<sup>5</sup>](#sources)

1. `constructor()`
    - `componentWillMount()`(UNSAFE)는 버전17 까지만 지원되기 때문에 `constructor()` 사용을 권장하고 있다.
2. `render()`
    - DOM에 리액트 element를 렌더하는 것으로, 컴포넌트가 생성된 후 실행되기도 하고, prop이 바뀌었을 때 리렌더링을 하기도 한다.
3. `componentDidMount()`
    - 첫 `render()`가 끝나고 실행된다. api에 비동기 요청을 주로 여기서 한다.
4. `componentWillUnmount()`
    - DOM에서 모든 element가 unmount 되었을 때 실행되며, `componentDidMount()`에서 등록한 이벤트 핸들러를 여기에서 remove 해주는 것이 좋다.

```javascript
myMethod = () => { /**/ }

componentDidMount() {
    window.addEventListener('scroll', myMethod)  // 이벤트 등록
    const getData = async () => {
        const data = await ( /**/ )
    }
}

componentWillUnmount() {
    window.removeEventListener('scroll', myMethod)   // 이벤트 해제
}
```

---

## 3. Updating

컴포넌트의 prop이 변경될 때에는 아래 순서대로 실행된다.
1. `static getDerivedStateFromProps(nextProps, prevState)`
    - 바뀐 prop에 따라 state를 변경하고 싶을 때 사용한다.[<sup>6</sup>](#sources) 컴포넌트가 새로운 prop을 받았을 때 실행된다. 
    - `componentWillReceiveProps()`(UNSAFE)나 `componentWillUpdate()`(UNSAFE) 대신 사용되도록 권장하고 있다.
    - nextProps는 바뀐 prop을 가리킨다. 아래처럼 바뀌기를 원하는 state를 `return` 해주어야 변경된 prop이 반영된다.
    - 이해에 도움이 되었던 Dan Abramov의 트위터 스레드 [<sup>7</sup>](#sources)

```javascript
state = { stage: 0 }

static getDerivedStateFromProps(nextProps) {
    return {
        stage: nextProps.stage
    }
}
```

<blockquote class="twitter-tweet" data-lang="ko"><p lang="en" dir="ltr">1. On init and every update<br>2. Yes<br>3. It is bad if you just copy them (because it’s unnecessary). Notice my example above is impossible without deriving state (because it depends *both* on current and previous state).</p>&mdash; Dan Abramov (@dan_abramov) <a href="https://twitter.com/dan_abramov/status/960545569226870784?ref_src=twsrc%5Etfw">2018년 2월 5일</a></blockquote>

2. `shouldComponentUpdate()`
    - 어떤 상황에서 리렌더링을 할지 조건을 걸고, 리렌더링을 하고자 한다면 `true`를, 하지 않는다면 `false`를 반환한다.
4. `render()`
    - 바뀐 prop과 state에 대해 다시 렌더링이 실행된다.
5. `componentDidUpdate()`
    - 렌더링이 끝난 후 실행된다.

---

## 4. Handling Events
- 리액트에서는 이벤트가 모든 브라우저에서 W3C 기준에 맞게 통일되어 있다.
- 리액트에서는 이벤트를 구현할 때 `addEventListener`를 일일이 써주지 않아도 된다. 렌더 함수 안의 각 element에 이벤트를 달아주면 된다. 
    - 특정 엘리먼트가 아니라 body 전체, document 전체에 대한 이벤트를 발생시킬 때(scroll 같은 경우)는 `addEventListener`를 써주기도 한다.
- event가 trigger 되면, 리액트가 이를 인터셉트해서 event handler는 [Synthetic event](https://reactjs.org/docs/events.html)의 인스턴스를 받는다. 그리고 개발자가 만든 콜백을 실행시켜준다.[<sup>8</sup>](#sources)
- `stopPropagation()`, `preventDefault()`와 같은 네이티브 이벤트 API를 똑같이 사용할 수 있다.

*`stopPropagation()`: event가 상위 element로 전달되는 bubbling이 일어나지 않고 오직 해당 엘리먼트에만 적용되도록 하는 것.

---

## Should you learn React?

개인적으로는 파이썬으로 백엔드를 하다가 JS/React를 하면서 본격적으로 코딩에 재미를 느꼈다. '프레임워크를 먼저 배워야 하는가, 언어와 개념을 먼저 마스터하는게 좋은가?'라는 질문에 VueJS 코어팀의 [Sarah Drasner](https://www.codenewbie.org/podcast/which-javascript-framework-should-you-learn)는 무엇이든 정말로 상관없다고 말한다. 개념을 파면서 재미를 느끼는 사람은 그걸 먼저 하면 되고, 실제로 구동이 되는 걸 보면서 재미를 느끼는 사람은 프레임워크의 도움을 받아서라도 무엇이든 만들어보는게 좋다. 재미를 느끼는 걸 먼저하고 필요가 느껴질 때 개념이든 프레임워크든 배우는게 중요한 것 같다.

---

출처
<div id="sources">

1. https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html#components-can-be-classes-or-functions
2. 
https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html#components-encapsulate-element-trees
3. http://blog.reverberate.org/2014/02/react-demystified.html
4. https://reactjs.org/docs/components-and-props.html#props-are-read-only
5. https://reactjs.org/docs/react-component.html#mounting
6. https://velopert.com/1130
7. https://twitter.com/dan_abramov/status/960305777968930816
8. https://levelup.gitconnected.com/how-exactly-does-react-handles-events-71e8b5e359f2

</div>