---
path: "/react-behind-the-scene"
date: "2018-04-24"
title: "How React works - lifecycle, compile, load, render, update and how it shows the way we see it"
tags: ['react', 'lifecycle']
excerpt: ""
type: ""
---

## 0. What to learn first? Framework or Javascript?

- Sarah Drasner code newbie podcast (which framework to choose): 둘다 상관없다. 
- 

newbie는 재미를 느끼는 게 더 중요하다고 생각. 개념을 파면서 재미를 느끼는 사람은 그걸 먼저 하면 되고, 실제로 구동이 되는 걸 보면서 재미를 느끼는 사람은 실제로 만들어보면 되고.

+트윗도 추가

---

브라우저에가 html 파일을 받으면 NodeList 등의 _자바스크립트 객체_로 바꾼다.

---

## 1. Mounting

1. `constructor()`
    - componentWillMount()은 버전17 까지만 지원되기 때문에 `constructor()` 사용을 권장하고 있습니다.
2. `render()`
3. `componentDidMount()`

---

## 2. Updating

1. `shouldComponentUpdate(nextProps, nextState)`
    - 이 포스팅은 사실 shouldComponentUpdate()를 정리하기 위해 썼는데요.
    
2. `render()`
    - 컴포넌트가 업데이트 될 때도 새로 렌더링 합니다(?)

---

## 3. Unmounting

1. `componentWillUnmount()`
  - `componentDidMount()`에서 등록한 이벤트 핸들러를 여기에서 remove 해주는 것이 좋습니다.

---

## 4. Others

1. `setState()`
2. `defaultProps`
3. `displayName`
4. `props` / `state`

---

출처 
- [React.Component](https://reactjs.org/docs/react-component.html)