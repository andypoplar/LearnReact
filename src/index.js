import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './todoList'
// import { Provider } from 'react-redux'
// import store from './store'

// 1、组件和store做连接
// const App = (
//   <Provider store={store}>
//     里面内容即可用store内容
//   </Provider>
// )

ReactDOM.render(
  <div>
    <TodoList />
  </div>,
  document.getElementById('root')
);
