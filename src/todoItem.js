import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  // 解决父组件数据更新导致子组件执行render函数
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  render() {
    const { content } = this.props
    return (
      // 接受父组件向子组件传递的数据
      <div onClick={this.handleItemClick}>{ content}</div>
    )
  }

  // 子组件传给父组件数据
  handleItemClick() {
    const { index, handleItemClick } = this.props
    handleItemClick(index)
  }
}

// 对TodoItem属性做校验
TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleItemClick: PropTypes.func,
  index: PropTypes.number
}


export default TodoItem