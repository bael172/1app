import React from 'react'
import PropTypes from "prop-types"
import './App.css'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      txt:"trener"
    }
  }
  update(){
    this.setState({txt:event.target.value})
  }
  render()
{
  //return React.createElement('h1',null,'Hello nephews') React.createElement('b',null,'Bold')
  const knopka = document.querySelector('button1')
  return (
    <article>
      <div>
      <input type="text" onChange={this.update.bind(this)}/>
      <h2>{this.state.txt}</h2>

    </div>
      <div>
        <button onclick="alert('Терпение')">Click me</button>
        <script>
            const my FirstEvent = document.querySelector('button')
            myFirstEvent.onclick = function() {
              alert("Да будет так!")
            }
            myFirstEvent.addEventListener('click', function(){
              alert('Дорогу осилит идущий')
            })
        </script>
      </div>
    </article>
    
  )
}}
/*
App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}
App.defaultProps = {
  txt: "this is the default txt"
}
*/

      /*
      document.getElementById('button1')
      knopka.addEventListener('click', () => <noscript> You clicked </noscript>)
      */

//const App = () =><h1>Hello nephews!</h1>

export default App