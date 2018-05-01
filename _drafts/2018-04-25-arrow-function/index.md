arrow function에서 this가 가리키는 곳은?

## 1. binding `this`
react to bind or not to bind 에서 arrow function 쓰면 this 바인딩 하지 않아도 되는거

---

## 2. `this` and event listener

- 이벤트 리스너 안에서 arrow function을 쓰면 this가 가리키는 것이 그 바깥 스코프가 된다.

```javascript
const button = document.querySelector('button')

button.addEventListener('click', () => {
  this.classList.toggle('on') // 여기서 this는 window 객체를 가리키게 된다. 
})
```

```javascript
const button = document.querySelector('button')

button.addEventListener('click', function() {
  this.classList.toggle('on') // 여기서 this는 button을 가리킨다.
})
```

출처 - https://wesbos.com/arrow-function-no-no/

---

## 3. `onClick={() => {...}}` 이렇게 써도 될까, 안될까? 
- 렌더링 할 때마다 불러오기 때문에 퍼포먼스 저해하지 않을까?
-> 별 차이 없다!