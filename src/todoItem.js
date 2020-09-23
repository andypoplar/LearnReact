import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  // 当组件即将被从页面中剔除的时候执行 
  componentWillUnmount() {
    console.log('child componentWillUnmount')
  }

  // 解决父组件数据更新导致子组件执行render函数
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  // 当父组件的render函数被运行时，它的子组件的render也将被重新运行一次
  render() {
    console.log('child render')
    // return 的内容: JSX -> createElement -> 虚拟DOM(JS对象) -> 真实DOM
    const { content, test } = this.props
    return (
      // 接受父组件向子组件传递的数据
      <div onClick={this.handleItemClick}>{test} - { content}</div>
    )

    // 底层变化
    // return React.createElement('div', {}, React.createElement('span', {}, 'item'))
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
  index: PropTypes.number,
  test: PropTypes.string.isRequired
}

TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem