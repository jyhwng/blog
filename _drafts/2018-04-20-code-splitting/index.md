---
path: "/code-splitting"
date: "2018-04-18"
title: "Code splitting"
tags: ['create-react-app', 'javascript']
excerpt: "Code splitting when using react, react router"
type: "post"
---

`create-react-app`에서 프로젝트를 만들고 빌드를 실행하면 webpack에 의해 여러개의 페이지가 하나의 js파일, 하나의 css로 번들된다. 번들 크기가 너무 커지면 아래와 같은 오류가 나오기도 하는데, `create-react-app` 공식문서에서는 이를 code splitting으로 해결하도록 권장하고 있다.

![Imgur](https://i.imgur.com/AvnqO7j.png)

- [Code splitting from Webpack](https://webpack.js.org/guides/code-splitting/)
- [Code splitting from React](https://reactjs.org/docs/code-splitting.html)

---

## 1. How to split codes?
`create-react-app`은 [동적인 import](https://reactjs.org/docs/code-splitting.html#import)를 지원한다. 동적인 import는 첫 로드에 필요없는 모듈을 조건부로, 또는 비동기적으로 import하는 방법이다. '[Code Splitting in Create React App](https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html)'에서 나오는 방법대로 비동기 import를 해보았다.

```javascript
import React, { Component } from 'react';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null // null 대신 loading spinner를 사용할 수도 있다.
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
```

---