import React, { Fragment } from 'react'
import { Input, Button, List } from 'antd'
// 无状态组件
const TodoListUI = (props) => {
  return (
    <Fragment>
        <div>
          <Input
            style={{width: '300px',margin: '10px 5px 0 5px'}}
            value={props.inputValue}
            onChange={props.handleInputChange}
          />
          <Button type="primary" onClick={props.handleSubmitClick}>提交</Button>
        </div>
        <List
          rowKey={record => record}
          style={{width: '300px',margin: '10px 5px 0 5px'}}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item>
              {item}
              <Button
                style={{float: 'right', marginTop: '-5px'}}
                danger
                type="text"
                onClick={() => {props.handleDeleteClick(index)}}
              >删除</Button>
            </List.Item>
          )}
        />
      </Fragment>
  )
}

// 普通组件
// class TodoListUI extends Component {
//   render() {
//     return (
//       <Fragment>
//         <div>
//           <Input
//             style={{width: '300px',margin: '10px 5px 0 5px'}}
//             value={this.props.inputValue}
//             onChange={this.props.handleInputChange}
//           />
//           <Button type="primary" onClick={this.props.handleSubmitClick}>提交</Button>
//         </div>
//         <List
//           rowKey={record => record}
//           style={{width: '300px',margin: '10px 5px 0 5px'}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item>
//               {item}
//               <Button
//                 style={{float: 'right', marginTop: '-5px'}}
//                 danger
//                 type="text"
//                 onClick={(index) => {this.props.handleDeleteClick(index)}}
//               >删除</Button>
//             </List.Item>
//           )}
//         />
//       </Fragment>
//     )
//   }
// }

export default TodoListUI