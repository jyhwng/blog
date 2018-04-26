arrow function에서 this가 가리키는 곳은?

1. react to bind or not to bind 에서 arrow function 쓰면 this 바인딩 하지 않아도 되는거

2. 이벤트 리스터에서는 arrow function 쓰면 안됨
https://wesbos.com/arrow-function-no-no/

3. `onClick={() => {...}}` 이렇게 써도 될까, 안될까? 
- 렌더링 할 때마다 불러오기 때문에 퍼포먼스 저해하지 않을까?
-> 별 차이 없다!