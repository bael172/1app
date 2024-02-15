import React from 'react'
import {PropTypes} from "prop-types"

class App extends React.Component{
  render()
{
  //return React.createElement('h1',null,'Hello nephews') React.createElement('b',null,'Bold')
  let person = this.props.txt
  return (
    <div>
      <h1>Hello {person} and {this.props.cat}</h1>
    </div>
  )
}}
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}
App.defaultProps = {
  txt: "this is the default txt"
}

//const App = () =><h1>Hello nephews!</h1>

export default App