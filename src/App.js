import React, { Component }from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [1, 2, 3]
    }
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  render() {
    return (
      <div>
        {/* <CSSTransition
          in={this.state.show}
          timeout={1000}
          unmountOnExit
          classNames='fade'
          onEntered={(el) => {el.style.color='blue'}}
          appear={true}
        >
          
        </CSSTransition> */}
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  key={index}
                  timeout={1000}
                  unmountOnExit
                  classNames='fade'
                  onEntered={(el) => {el.style.color='blue'}}
                  appear={true}
                >
                  <div >{ item }</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>toggle</button>
      </div>
    )
  }

  handleAddItem() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }
}

export default App;
