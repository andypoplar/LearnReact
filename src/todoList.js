import React, { Component, Fragment } from 'react'
import TodoItem from './todoItem'
import axios from 'axios';
import './style.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleSubmitClick = this.handleSubmitClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  /**
   * 生命周期函数指在某一个时刻组件会自动调用执行的函数
   */

  // 在组件即将被挂载到页面时候执行
  componentWillMount() {
    console.log('componentWillMount')
  }

  // 在组件被挂载到页面后执行，ajax请求放在这里
  componentDidMount() {
    axios.get('/api/todolist').then(res => {
      console.log(res)
    })
  }

  // 组件更新之前执行，返回一个boolean，决定组件是否更新，返回false的话，输入框则不会有效
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }

  // 组件被更新之前，在shouldComponentUpdate 返回true后执行，如果返回false则不执行
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  // 组件更新完成之后执行
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    console.log('parent render')
    return (
      // Fragment可替代最外层的div元素
      <Fragment>
        <div>
          {/* JSX注释格式 */}
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(input) => {this.input = input}}  
          />
          <button onClick={this.handleSubmitClick}>提交</button>
        </div>
        <div>
          <ul ref={(ul) => {this.ul = ul}}>{this.getTodoList()}</ul>
        </div>
      </Fragment>
    )
  }

  getTodoList() {
    return (
      this.state.list.map((item, index) => {
        return (
          <div key={index}>
            <TodoItem 
              content={item} 
              index={index}
              // 接受子组件向父组件传递的方法，注意绑定的this
              handleItemClick={this.handleDeleteClick}
            />
          </div>
        )
      })
    )
  }

  handleInputChange(e) {
    const inputValue = this.input.value
    this.setState(() => ({
      inputValue
    }))
    // this.setState({
    //   inputValue: e.target.value
    // })
  }

  handleSubmitClick() {
    // prevState：修改数据之前的那一次数据，等价于this.state
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => { // 异步执行完之后再执行
      // console.log(this.ul.querySelectorAll('div').length)
    })

    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }

  handleDeleteClick(index) {
    const list = [...this.state.list]
    list.splice(index, 1)

    this.setState(() => ({
      list
    }))

    // this.setState({
    //   list
    // })
  }
}

export default TodoList