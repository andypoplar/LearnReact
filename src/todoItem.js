import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  render() {
    return (
      // 接受父组件向子组件传递的数据
      <div onClick={this.handleItemClick}>{ this.props.content }</div>
    )
  }

  // 子组件传给父组件数据
  handleItemClick() {
    const { index, handleItemClick } = this.props
    handleItemClick(index)
  }
}

export default TodoItem